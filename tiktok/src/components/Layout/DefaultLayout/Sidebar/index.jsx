import className from 'classnames/bind';
import style from './Sidebar.module.scss';

const cx = className.bind(style);
function Sidebar() {
  return (
    // <aside style={{ width: '340px' }}>
    //   <h1> sidebar </h1>
    // </aside>
    <aside className={cx('wrapper')}>
      <h1>sidebar</h1>
    </aside>
  );
}

export default Sidebar;
