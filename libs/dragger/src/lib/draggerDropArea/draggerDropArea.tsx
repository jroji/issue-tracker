import { useCallback, useContext } from 'react';
import styles from './draggerDropArea.module.css';
import { DragContext } from '../dragContext/dragContext';

/* eslint-disable-next-line */
export interface DraggerDropAreaProps {
  children: React.ReactNode;
  onCardDrop?: (selectCard: unknown) => void;
}

export function DraggerDropArea(props: DraggerDropAreaProps) {
  const { selectedCard, dropCard } = useContext(DragContext);

    const handleMouse = useCallback(() => {
      if (selectedCard) {
        dropCard();
        props.onCardDrop && props.onCardDrop(selectedCard);
      }
  }, [selectedCard])

  return (
      <div className={styles['container']} onMouseUp={handleMouse}>
        { props.children }
      </div>
  );
}

export default DraggerDropArea;
