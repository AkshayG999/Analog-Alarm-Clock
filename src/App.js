import './App.css';
import AlarmOption from './components/AlarmOption/AlarmOption';
import AnalogClock from './components/AnalogClock/AnalogClock';
import ContextAlarm from './components/context/ContextAlarm';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <ContextAlarm>
            <AnalogClock />
            <DigitalClock />
            <AlarmOption />
            <Footer />
          </ContextAlarm>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
}

export default App;
