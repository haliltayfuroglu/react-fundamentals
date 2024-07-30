import styles from './banner.module.css';

const Banner = ({ headerText, children }) => {
    const text = headerText || children;
    return (
        <header className="row mb-4">
            <div className="col-5 mt-80">
                <img className={styles.logo} src="https://teds-dev-data.s3.us-east-2.amazonaws.com/enr/LOGO/logo.png?1712284627243" alt="logo" />
            </div>
            <div className="themeColor col-7 mt-5" style={{ fontStyle: "italic" }}>
                {text ?? 'Providing houses all the world'}
            </div>
        </header>
    );
};

export default Banner;