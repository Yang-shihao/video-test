<template>
  <view class="container">
    <button @click="startProcessing">开始处理视频</button>
    <button @click="stopServer">停止服务</button>
    <button @click="playVideo">播放视频</button>
    <video v-if="processingDone" :src="videoUrl" controls id="videoPlayer" style="width: 100%; height: 300px; margin-top: 20px"></video>
  </view>
</template>

<script>
import { checkPort, WebServer } from "../../js/web-server.js";
export default {
  data() {
    return {
      processingDone: false, // 标记视频处理是否完成
      videoUrl: "", // 本地 m3u8 播放地址
      localServerPort: 8080, // 本地服务端口（可根据需要修改）
      videoFolder: "video_processing", // 存储切片及播放列表的文件夹名称
      ffmpeg: null,
    };
  },
  mounted() {
    this.context = uni.createVideoContext("videoPlayer", this);
    this.ffmpeg = uni.requireNativePlugin("FUN-FFmpeg");
    // 开始视频处理流程
    const globalEvent = uni.requireNativePlugin("globalEvent");
    globalEvent.addEventListener("ffmpegOnFinishEvent", function (ee) {
      // console.log("----Event-----", ee);
    });
  },
  methods: {
    async startProcessing() {
      // 1. 确定输入视频路径（这里假设视频在 _www 目录中）
      const inputVideoPath = plus.io.convertLocalFileSystemURL("_www/static/video/video.mp4");
      // 2. 获取应用私有文档目录下指定文件夹的完整路径
      plus.io.requestFileSystem(
        plus.io.PRIVATE_DOC,
        (fs) => {
          fs.root.getDirectory(
            this.videoFolder,
            {
              create: true,
            },
            (dirEntry) => {
              console.log("目标文件夹创建或已存在：", dirEntry.fullPath);
              // plus.io.resolveLocalFileSystemURL('_www/static/video/video.mp4', (entry) => {
              //     console.log('文件存在:', entry.fullPath);
              //     plus.runtime.openFile(entry.fullPath); // 尝试打开文件
              // }, (err) => {
              //     console.error('文件不存在:', err);
              // });
              this.runFFmpeg(inputVideoPath, dirEntry.fullPath);
            },
            (err) => {
              console.error("创建文件夹失败：", err);
            }
          );
        },
        (err) => {
          console.error("获取文件系统失败：", err);
        }
      );
    },
    runFFmpeg(input, outputFolder) {
      const command = `ffmpeg -i ${input} -c copy -map 0 -f segment -segment_time 10 -segment_list ${outputFolder}/playlist.m3u8 -segment_format mpegts ${outputFolder}/output%03d.ts`;
      this.ffmpeg.start(
        {
          show: false,
          cmd: command,
        },
        (res) => {
          console.log(res);
          if (res.progress === 100 && res.result === "true") {
            console.log("视频切片处理完成", res);
          } else {
            console.error("FFmpeg 处理失败：", res.error);
          }
        }
      );
    },
    async initHttp(port, outputFolder) {
      // #ifdef APP-PLUS
      const [err, res] = await checkPort(port);
      if (res == true) {
        let server = new WebServer(port);
        const localPath = plus.io.convertLocalFileSystemURL(outputFolder);
        server.addWebStatic("/", localPath);
        uni.$webServer = server;
        return server;
      } else {
        console.log(err);
      }
      // #endif
    },
    stopServer() {
      uni.$webServer.stop((result, msg) => {
        console.log(result);
      });
    },
    // 启动服务并播放视频
    playVideo() {
      this.initHttp(8080, "_doc/video_processing/").then((server) => {
        console.log("server===>", server);
        if (server) {
          server.start((result, msg) => {
            console.log("result===>", result);
            if (result) {
              server.getIp((res) => {
                console.log("获取IP并打开浏览器===>", res);
                const server = `http://${res.data.ip}:8080`;
                this.videoUrl = `${server}/playlist.m3u8`;
                this.processingDone = true;
                this.context.play(); // 播放
              });
            } else {
              console.error("启动服务器失败:", msg);
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

button {
  margin: 10px 0;
}
</style>
