import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>
        <div className="flex gap-4">

        </div>
      </div>
    </section>
  );
};

export default TopBar
