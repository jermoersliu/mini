Component({
  properties: {
    innerText2: {
      type: String,
      value: "hello world",
    }
  }
});

// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    next:true,
    checkedBox:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

// function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const regeneratorRuntime = require("../../../../util/regenerator-runtime/runtime");

// const util = require('../../../../util/util');
// const app = getApp();
// const co = require('../../../../util/co');
// const ERROR_CODE = require('../../../../config/errorConfig').ERROR_CODE;
// const MIN_WECHAT_VERSION = require('../../../../config/commonConfig').MIN_WECAHT_VERSION;

// const oriGoNext = function () {
//   if (!app.globalData.token) {
//     util.showErrorToast.call(this, ERROR_CODE.ERROR_CODE_AUTHENTICATION_FAIL);
//   } else {
//     console.log("oriGoNext| ", app.globalData.main_key);
//     // 数据上报：用户的uid
//     wx.reportAnalytics('index_auth', {
//       uid: app.globalData.uid
//     });
//     wx.navigateTo({
//       url: '../sms/sms'
//       // url: '../ocr/ocr'
//       // url: '../identvideo/identvideo?id_number=441581199509049018&id_name=张辉煌'
//     });
//   }
// };

// const getCodePromise = function () {
//   return new Promise((resolve, reject) => {
//     wx.login({
//       success: res => {
//         console.log("getcode| ", res);
//         resolve(res.code);
//       },
//       fail: err => {
//         reject({
//           error_msg: err,
//           error_code: ERROR_CODE.ERROR_CODE_LOGIN_FAIL
//         });
//       }
//     });
//   });
// };

// Page({
//   data: {
//     next_or_not: true, //是否进行下一步
//     index_rule: false,
//     show_error_msg: false,
//     checkedBox: true,
//     // item: {
//     //     error_msg: ""
//     // }
//     unscrollable: ''
//   },
//   onShow: function () {
//     this.setData({
//       next_or_not: true,
//       checkedBox: true
//     });
//     // 如果跳到首页，ocr信息被清除
//     app.globalData.id_name = '';
//     app.globalData.id_number = '';
//     app.globalData.id_address = '';
//     app.globalData.front_succ = false;
//     app.globalData.back_succ = false;
//     app.globalData.ocr_next_or_not = false;
//   },
//   onLoad: function () {
//     let self = this;
//     try {
//       self.setData({
//         next_or_not: false
//       });
//       let system_info = wx.getSystemInfoSync();
//       app.globalData.platform = system_info.platform;
//       console.log(`system_info:${JSON.stringify(system_info)}`);
//       if (util.compareVersion(system_info.version, MIN_WECHAT_VERSION) === -1) {
//         util.showErrorToast.call(self, ERROR_CODE.ERROR_CODE_LOW_WECHAT_VERSION);
//       } else {
//         self.getToken();
//       }
//     } catch (err) {
//       console.log(err);
//       util.showErrorToast.call(self, ERROR_CODE.ERROR_CODE_GET_PHONE_INFO_FAIL);
//     }
//   },
//   getToken: (() => {
//     var _ref = _asyncToGenerator(function* () {
//       // TODO
//       let self = this;
//       try {
//         let code = yield getCodePromise();

//         let url = `${app.globalData.baseUrl}/appauth.php`;
//         let data = {
//           appid: app.globalData.TJappid,
//           uid: app.globalData.uid,
//           type: '0',
//           wxcode: code
//         };
//         let header = {
//           'signature': app.globalData.signature,
//           'Content-Type': 'application/json'
//         };
//         let wx_req = {};
//         wx_req.url = url;
//         wx_req.method = 'POST';
//         wx_req.data = data;
//         wx_req.header = header;

//         let wx_res = yield util.WXRequestPromise(wx_req);
//         console.log('token | ', wx_res);
//         app.globalData.token = wx_res.data.data.token;
//         app.globalData.main_key = app.globalData.uid + app.globalData.TJappid;
//         console.log('main_key | ', app.globalData.main_key);
//         self.setData({
//           next_or_not: true
//         });
//       } catch (err) {
//         console.log(err);
//         // 如果后台服务器挂了，不会提示请求超时
//         if (err.error_code && err.error_code !== ERROR_CODE.ERROR_CODE_REQUEST_TIMEOUT) {
//           util.showErrorToast.call(self, err.error_code);
//         }
//       }
//     });

//     return function getToken() {
//       return _ref.apply(this, arguments);
//     };
//   })(),
//   onUnload: function () { },
//   switchIndexRule: function () {
//     this.setData({
//       index_rule: !this.data.index_rule
//     });
//     this.switchScrollable();
//   },
//   checkboxChange: function (e) {
//     this.setData({
//       checkedBox: !this.data.checkedBox,
//       next_or_not: !this.data.next_or_not
//     });
//   },
//   goNext: function () {
//     // 防止多次快速点击按钮进入多个sms界面
//     this.setData({
//       next_or_not: false
//     });
//     let goNextWrap = util.checkNetworkWrap(oriGoNext, this);
//     goNextWrap();
//     this.setData({
//       next_or_not: true
//     });
//   },
//   switchDialog: function () {
//     console.log('switchDialog');
//     this.setData({
//       show_error_msg: !this.data.show_error_msg
//     });
//     this.switchScrollable();
//   },
//   // 解决二级弹窗时底面页面可以滑动的问题
//   switchScrollable: function () {
//     if (this.data.unscrollable) {
//       this.setData({
//         unscrollable: ""
//       });
//     } else {
//       this.setData({
//         unscrollable: "unscrollable"
//       });
//     }
//   }
// });