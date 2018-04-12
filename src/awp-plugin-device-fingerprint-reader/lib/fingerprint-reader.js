/**
 * @module 【device】FingeprintReader
 * @desc 指纹仪
 */
export default {
  /**
   * @func getSampleAsync
   * @desc 获取指纹模版
   * @returns {Object} 指纹模版信息
   * @example import { FingeprintReader } from 'awp-plugin-device-fingerprint-reader'
   *
   * FingeprintReader.getSampleAsync()
   */
  getSampleAsync() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'FingerprintReader',
        'GetSampleAsync',
        []);
    });
  },
/**
   * @func getFeatureImageAsync
   * @desc 获取指纹模版
   * @param {String} imagePath - 指纹图片保存路径
   * @returns {Object} 指纹模版信息
   * @example import { FingeprintReader } from 'awp-plugin-device-fingerprint-reader'
   *
   * FingeprintReader.getFeatureImageAsync()
   */
  getFeatureImageAsync(imagePath) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'FingerprintReader',
        'GetFeatureImageAsync',
        [imagePath]);
    });
  },
/**
   * @func getFeatureDataAsync
   * @desc 获取指纹模版
   * @returns {String} 指纹特征数据
   * @example import { FingeprintReader } from 'awp-plugin-device-fingerprint-reader'
   *
   * FingeprintReader.getFeatureDataAsync()
   */
  getFeatureDataAsync() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'FingerprintReader',
        'GetFeatureDataAsync',
        []);
    });
  },
/**
   * @func isFeatureMatchAsync
   * @desc 指纹特征是否匹配
   * @param {String} templateData - 指纹模版数据
   * @example import { FingeprintReader } from 'awp-plugin-device-fingerprint-reader'
   *
   * FingeprintReader.isFeatureMatchAsync()
   */
  isFeatureMatchAsync(templateData) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'FingerprintReader',
        'IsFeatureMatchAsync',
        [templateData]);
    });
  },
/**
   * @func cancelAsync
   * @desc 取消
   * @example import { FingeprintReader } from 'awp-plugin-device-fingerprint-reader'
   *
   * FingeprintReader.cancelAsync()
   */
  cancelAsync() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'FingerprintReader',
        'Cancel',
        []);
    });
  },
/**
   * @func getStatusAsync
   * @desc 获取设备状态
   * @returns {Object} 设备状态信息
   * @example import { FingeprintReader } from 'awp-plugin-device-fingerprint-reader'
   *
   * FingeprintReader.getStatusAsync()
   */
  getStatusAsync() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'FingerprintReader',
        'GetStatusAsync',
        []);
    });
  }
};
