import Feedback from './Feedback/Feedback';
import css from './App.module.css';
export const App = () => {
  return (
    <div
      className={css.container}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Feedback />
    </div>
  );
};
