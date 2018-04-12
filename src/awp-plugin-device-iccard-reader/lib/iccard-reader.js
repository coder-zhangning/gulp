/**
 * @module 【device】ICCardReader
 * @desc 非接 IC 读卡器
 */
export default {
/**
 * @func readCardAsync
 * @desc 读取二维码/条码
 * @returns {String} 卡号(字符串)
 * @example import from { ICCardReader } from 'awp-plugin-device-iccard-reader'
 * ICCardReader.readCardAsync()
 */
  readCardAsync() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'ICCardReader',
        'ReadCardAsync',
        []);
    });
  },
/**
 * @func cancelAsync
 * @desc 取消
 * @example import from { ICCardReader } from 'awp-plugin-device-iccard-reader'
 * ICCardReader.cancelAsync()
 */
  cancelAsync() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'ICCardReader',
        'Cancel',
        []);
    });
  },
/**
 * @func getStatusAsync
 * @desc 获取设备状态
 * @example import from { ICCardReader } from 'awp-plugin-device-iccard-reader'
 * ICCardReader.getStatusAsync()
 */
  getStatusAsync() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'CardReader',
        'GetStatusAsync',
        []);
    });
  },
/**
 * @func readCardChipAsync
 * @desc 读取身份证
 * @example import from { ICCardReader } from 'awp-plugin-device-iccard-reader'
 * @returns {Object} 身份信息
 * ICCardReader.readCardChipAsync()
 */
  readCardChipAsync() {
    return this.excuteMethod('ReadCardChipAsync', []);
  },
/**
 * @func waitCardTakenAsync
 * @desc 等待身份证被取走
 * @example import from { ICCardReader } from 'awp-plugin-device-iccard-reader'
 * ICCardReader.waitCardTakenAsync()
 */
  waitCardTakenAsync() {
    return this.excuteMethod('WaitCardTakenAsync', []);
  },
/**
   * @func powerUpAsync
   * @desc IC 卡上电
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.powerUpAsync()
   */
  powerUpAsync() {
    return this.excuteMethod('PowerUpAsync', []);
  },
/**
   * @func powerDownAsync
   * @desc IC 卡下电
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.powerDownAsync()
   */
  powerDownAsync() {
    return this.excuteMethod('PowerDownAsync', []);
  },
/**
   * @func pbocGetAppInfoByAIDAsync
   * @desc 通过 AID 获取应用信息
   * @param {Number} AID - (应用 ID)
   * @returns {Object} 应用信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetAppInfoByAIDAsync(aId)
   */
  pbocGetAppInfoByAIDAsync(aId) {
    return this.excuteMethod('PbocGetAppInfoByAIDAsync', [aId]);
  },
/**
   * @func pbocGetAppInfoByDebitAIDAsync
   * @desc 通过借记卡 ID 获取卡信息
   * @returns {Object} 应用信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetAppInfoByDebitAIDAsync()
   */
  pbocGetAppInfoByDebitAIDAsync() {
    return this.pbocGetAppInfoByAIDAsync('A000000333010101');
  },
/**
   * @func pbocGetAppInfoByCreditAIDAsync
   * @desc 通过贷记卡 ID 获取卡信息
   * @returns {Object} 应用信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetAppInfoByCreditAIDAsync()
   */
  pbocGetAppInfoByCreditAIDAsync() {
    return this.pbocGetAppInfoByAIDAsync('A000000333010102');
  },
/**
   * @func pbocAppInitializeAsync
   * @desc 通过所有参数初始化应用
   * @param {String} pdol - PDOL 值连接起来的字符串
   * @returns {Object} 应用信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocAppInitializeAsync(pdol)
   */
  pbocAppInitializeAsync(pdol) {
    return this.excuteMethod('PbocAppInitializeAsync', []);
  },
/**
   * @func pbocAppInitializeByParamsAsync
   * @desc 通过输入部分参数初始化应用
   * @param {String} authAmount - 授权金额，固定 12 位长度字符串，已分为单位
   * @param {Number} tradeType - 交易类型，常用类型:00:消费,01:现金,21:存款,31:余额,40:转账,60:圈存
   * @returns {Object} 应用信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocAppInitializeByParamsAsync(authAmount,tradeType)
   */
  pbocAppInitializeByParamsAsync(authAmount, tradeType) {
    return this.excuteMethod('PbocAppInitializeByParamsAsync', [authAmount, tradeType]);
  },
/**
   * @func pbocAppInitializeByDefaultParamsAsync
   * @desc 通过默认参数初始化应用
   * @returns {Object} 应用信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocAppInitializeByDefaultParamsAsync()
   */
  pbocAppInitializeByDefaultParamsAsync() {
    return this.pbocAppInitializeByParamsAsync('000000000000', '00');
  },
/**
   * @func pbocReadAppDataAsync
   * @desc 读取卡片数据
   * @returns {Object} 卡片数据
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocReadAppDataAsync()
   */
  pbocReadAppDataAsync() {
    return this.excuteMethod('PbocReadAppDataAsync', []);
  },
/**
   * @func pbocGetDataAsync
   * @desc 获取卡内标签值
   * @param {String} p1 - APDU 命令 p1 值
   * @param {String} p2 - APDU 命令 p2 值
   * @returns {String} 标签值
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetDataAsync(p1,p2)
   */
  pbocGetDataAsync(p1, p2) {
    return this.excuteMethod('PbocGetDataAsync', [p1, p2]);
  },
/**
   * @func pbocGetECashLimitAsync
   * @desc 获取电子现金限额
   * @returns {String} 电子现金限额
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetECashLimitAsync()
   */
  pbocGetECashLimitAsync() {
    return this.pbocGetDataAsync('9F', '77');
  },
/**
   * @func pbocGetECashTradeLimitAsync
   * @desc 获取电子现金交易限额
   * @returns {String} 电子现金交易限额
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetECashTradeLimitAsync()
   */
  pbocGetECashTradeLimitAsync() {
    return this.pbocGetDataAsync('9F', '78');
  },
/**
   * @func pbocGetECashBalanceAsync
   * @desc 获取电子现金余额
   * @returns {String} 电子现金余额
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetECashBalanceAsync()
   */
  pbocGetECashBalanceAsync() {
    return this.pbocGetDataAsync('9F', '79');
  },
/**
   * @func pbocGetECashResetThresholdAsync
   * @desc 获取电子现金重置阈值
   * @returns {String} 电子现金重置阈值
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetECashResetThresholdAsync()
   */
  pbocGetECashResetThresholdAsync() {
    return this.pbocGetDataAsync('9F', '6D');
  },
/**
   * @func pbocGetECashOffLineBalanceAsync
   * @desc 获取电子现金脱机可用余额
   * @returns {String} 电子现金脱机可用余额
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetECashOffLineBalanceAsync()
   */
  pbocGetECashOffLineBalanceAsync() {
    return this.pbocGetDataAsync('9F', '5D');
  },
/**
   * @func pbocGetCVMLimitAsync
   * @desc 获取卡片 CVM 限额
   * @returns {String} 卡片 CVM 限额
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetCVMLimitAsync()
   */
  pbocGetCVMLimitAsync() {
    return this.pbocGetDataAsync('9F', '6B');
  },
 /**
   * @func pbocStartTradeAsync
   * @desc 开始交易
   * @returns {String} ARQC 或者 ACC 或者 TC
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocStartTradeAsync()
   */
  pbocStartTradeAsync() {
    return this.excuteMethod('PbocStartTradeAsync', []);
  },
/**
   * @func pbocGenerateUnionpayField55Async
   * @desc 获取银联交易中 55 域信息
   * @param {Object[]} unionpayElements - 55 域可选字段列表
   * @param {String} unionpayElements[].Tag - 标签
   * @param {String} unionpayElements[].Value - 值
   * @returns {String} 55 域信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGenerateUnionpayField55Async(unionpayElements)
   */
  pbocGenerateUnionpayField55Async(unionpayElements) {
    return this.excuteMethod('GenerateUnionpayField55', [unionpayElements]);
  },
/**
   * @func pbocGenerateUnionpayField55ByRequiredFieldAsync
   * @desc 获取银联交易中 55 域信息，仅必输字段
   * @returns {String} 55 域信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGenerateUnionpayField55ByRequiredFieldAsync()
   */
  pbocGenerateUnionpayField55ByRequiredFieldAsync() {
    return this.pbocGenerateUnionpayField55Async(null);
  },
/**
   * @func pbocExternalAuthAsync
   * @desc 外部认证
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocExternalAuthAsync()
   */
  pbocExternalAuthAsync(script) {
    return this.excuteMethod('ExternalAuthenticationAsync', [script]);
  },
/**
   * @func pbocFinishTradeAsync
   * @desc 结束交易，并执行脚本(如果入参中含有写卡脚本)
   * @param {String} script - 写卡脚本
   * @returns {String} ARQC 或者 ACC 或者 TC
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocFinishTradeAsync(script)
   */
  pbocFinishTradeAsync(script) {
    return this.excuteMethod('PbocFinishTradeAsync', [script]);
  },
/**
   * @func pbocExcuteScriptAsync
   * @desc 执行脚本
   * @param {String} script - 需要执行的脚本
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocExcuteScriptAsync(script)
   */
  pbocExcuteScriptAsync(script) {
    return this.excuteMethod('PbocExcuteScriptAsync', [script]);
  },
/**
   * @func pbocReadBinaryAsync
   * @desc 读取二进制文件
   * @param {String} sif - 短文件标识符
   * @returns {Object} 文件内容
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocReadBinaryAsync(sfi)
   */
  pbocReadBinaryAsync(sfi) {
    return this.excuteMethod('ReadBinaryAsync', [sfi]);
  },
/**
   * @func pbocUpdateBinaryAsync
   * @desc 更新二进制文件
   * @param {Object} data - 更新的内容
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocUpdateBinaryAsync(data)
   */
  pbocUpdateBinaryAsync(data) {
    return this.excuteMethod('ReadBinaryAsync', [data]);
  },
/**
   * @func pbocGetChallengeAsync
   * @desc 获取随机数
   * @param {Number} le - 期望随机数长度(格式字符 2 位，例如 04)
   * @returns {Number} 随机数
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetChallengeAsync(le)
   */
  pbocGetChallengeAsync(le) {
    return this.excuteMethod('GetChallengeAsync', [le]);
  },
/**
   * @func pbocGetChallengeOf4BAsync
   * @desc 获取 4B 长度随机数
   * @returns {Number} 随机数
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetChallengeOf4BAsync()
   */
  pbocGetChallengeOf4BAsync() {
    return this.excuteMethod('GetChallengeAsync', ['04']);
  },
/**
   * @func pbocSelectByFileIdAsync
   * @desc 根据文件 Id 选择应用
   * @param {Number} fileId - 文件 Id(例如昆山公交应用文件 Id 为:1001)
   * @returns {Object} 文件信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocSelectByFileIdAsync(fileId)
   */
  pbocSelectByFileIdAsync(fileId) {
    return this.excuteMethod('SelectByFileIdAsync', [fileId]);
  },
/**
   * @func pbocSelectMFAsync
   * @desc 选择 MF
   * @returns {Object} 文件相关信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocSelectMFAsync()
   */
  pbocSelectMFAsync() {
    return this.pbocSelectByFileIdAsync('3F00');
  },
/**
   * @func pbocChipIOAsync
   * @desc 使用原始指令操作 IC 卡
   * @param {String} cApdu - CAPDU 请求命令
   * @returns {Object} RAPDU 响应数据
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocChipIOAsync(cApdu)
   */
  pbocChipIOAsync(cApdu) {
    return this.excuteMethod('ChipIOAsync', [cApdu]);
  },
/**
   * @func pbocGetBalanceAsync
   * @desc 获取卡片余额
   * @param {String} cApdu - CAPDU 请求命令
   * @returns {Number} 余额(Int)
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocGetBalanceAsync()
   */
  pbocGetBalanceAsync() {
    return this.excuteMethod('GetBalanceAsync', []);
  },
/**
   * @func pbocCreditForLoadAsync
   * @desc 执行圈存
   * @param {String} tradeDate - 交易日期
   * @param {String} tradeTime - 交易时间
   * @param {String} mac2 - MAC2
   * @returns {Object} 圈存的信息
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.pbocCreditForLoadAsync(tradeDate, tradeTime, mac2)
   */
  pbocInitForLoadAsync(amount, deviceNo) {
    return this.excuteMethod('InitForLoadAsync', [amount, deviceNo]);
  },
/**
   * @func excuteMethod
   * @desc 执行方法
   * @param {String} funcName - 函数名称
   * @param {String} args - 命令
   * @example import { ICCardReader } from 'awp-plugin-device-iccard-reader'
   *
   * ICCardReader.excuteMethod(funcName, args)
   */
  pbocCreditForLoadAsync(tradeDate, tradeTime, mac2) {
    return this.excuteMethod('CreditForLoadAsync', [tradeDate, tradeTime, mac2]);
  },

  excuteMethod(funcName, args) {
    let promise = new Promise((resolve, reject) => {
      cordova.exec(
        success => resolve(success),
        error => reject(error),
        'ICCardReader',
        funcName,
        args);
    });

    return promise;
  }
};
