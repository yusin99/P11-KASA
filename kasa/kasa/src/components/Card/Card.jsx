import styles from './card.module.css';
import CardPropTypes from '../../proptypes/CardPropTypes';

// The Card component displays an image and a title.
// It takes a title and an image URL as input via the props.
export function Card({ title, picture }) {
  return (
    <div className={styles.card}>
      <img src={picture} alt={title}></img>
      <div className={styles.rectangle}></div>
      <span>{title}</span>
    </div>
  );
}

// PropTypes for type checking
Card.propTypes = CardPropTypes
