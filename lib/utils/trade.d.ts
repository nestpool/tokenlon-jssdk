import { TokenlonMakerOrderBNToString } from '../global';
export interface SimpleOrder {
    base: string;
    quote: string;
    side: 'BUY' | 'SELL';
    amount: number;
}
export interface QuoteResult {
    quoteId: string;
    base: string;
    quote: string;
    side: 'BUY' | 'SELL';
    amount: number;
    quoteAmount: number;
    price: number;
    timestamp: number;
    feeSymbol: string;
    feeAmount: number;
    transferTokenSymbol: string;
    transferTokenAmount: number;
    receiveTokenSymbol: string;
    receiveTokenAmount: number;
    priceExcludeFee: number;
    minAmount?: number;
    maxAmount?: number;
}
export interface CachedQuoteData {
    simpleOrder: SimpleOrder;
    order: TokenlonMakerOrderBNToString;
    timestamp: number;
}
/**
 * @note 不返回 order，返回一个新的数据结构，方便用户使用
 */
export declare const getQuote: (params: SimpleOrder) => Promise<QuoteResult>;
export interface TradeResult {
    success: boolean;
    executeTxHash: string;
    txHash?: string;
}
/**
 * @note 通过 quoteId 找到本地缓存的订单，签名、上链（ETH）、挂单
 */
export declare const trade: (quoteId: string) => Promise<TradeResult>;
