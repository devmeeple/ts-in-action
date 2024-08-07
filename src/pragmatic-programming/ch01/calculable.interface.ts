/**
 * 매출을 계산하는 인터페이스와 순이익을 계산하는 인터페이스 추출
 */
export interface Calculable {
  calculateRevenue(): number;

  calculateProfit(): number;
}
