import { useState } from 'react';
import { Refresh } from './components/Refresh';
// import { Basic } from './components/4.Variants/Basic/Basic';
import { Propagation } from './components/4.Variants/Propagation';
import { Checkbox } from './components/5.ExitAnimations/Checkbox/Checkbox';
import { MultipleChildren } from './components/5.ExitAnimations/MultipleChildren/MultipleChildren';
import { SameElementDifKey } from './components/5.ExitAnimations/SameElementDifKey';
import { Staggering } from './components/6.AnimationOrchestration/Staggering';
import { Basic } from './components/7.DynamicVariants/Basic';
import { CustomProperty } from './components/7.DynamicVariants/CustomProperty';
import { Switch } from './components/8.Cycling/Switch';
import { SwitchLayout } from './components/9.Layout/SwitchLayout';
import { ScaleCorrection } from './components/9.Layout/ScaleCorrection';
import { PopLayoutVsSync } from './components/5.ExitAnimations/PopLayoutVsSync.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div key={count}>
      {/* <Basic /> */}
      {/* <Propagation /> */}
      {/* <Checkbox /> */}
      {/* <MultipleChildren /> */}
      {/* <SameElementDifKey /> */}
      {/* <Staggering /> */}
      {/* <Basic /> */}
      <CustomProperty />
      {/* <Switch /> */}
      {/* <SwitchLayout /> */}
      {/* <ScaleCorrection /> */}
      <PopLayoutVsSync />
      <Refresh onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
