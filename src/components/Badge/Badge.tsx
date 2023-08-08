import styles from "./Badge.module.css";

interface Props {
  children: string;
}

const Badge = ({ children }: Props) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
