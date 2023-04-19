interface ChessBoardProps {
  className?: string;
}

export function ChessBoard( { className }: ChessBoardProps ) {
  return (
    <neochess-board
      class={className}>
    </neochess-board>
  );
}