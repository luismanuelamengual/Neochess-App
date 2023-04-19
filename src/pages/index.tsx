import { ChessBoard } from '@components';
import styles from './index.module.scss';

export default function Page() {

  return (
    <div className={styles.page}>
      <ChessBoard className={styles.chessboard}></ChessBoard>
    </div>
  );
}