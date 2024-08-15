import { VerificationEmailSender } from './verification-email-sender';

/**
 * 테스트 대역 클래스
 *
 * 14.2 VerificationEmailSender 인터페이스를 상속해 상위 인터페이스의 동작을 무시하는 메서드를 구현
 * 서비스에서 컴포넌트 객체대신 테스트 대역 클래스를 주입한다.
 */
export class DummyVerificationEmailSender implements VerificationEmailSender {
  send(): void {
    // do noting...
  }
}
