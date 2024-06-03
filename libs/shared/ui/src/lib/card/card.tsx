import { ReactElement } from 'react';
import Avatar from '../avatar/avatar';
import styles from './card.module.css';

export interface CardProps {
  titleSection: ReactElement;
  bodySection: ReactElement;
  selected?: boolean;
  onClick?: () => void;
}

export function Card(props: CardProps) {
  return (
    <article
      date-testid="card"
      onClick={props?.onClick}
      className={`${styles['card']} ${props.selected ? styles['card_selected'] : ''}`}
    >
      <div className={styles['card_title']}>
        { props.titleSection }
      </div>
      <div className={styles['card_body']}>
      { props.bodySection }
      </div>
    </article>
  );
}

export default Card;
