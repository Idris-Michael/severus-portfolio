import { WorldProvider, useWorld } from './context/WorldContext';
import { Background } from './components/Background';
import { EntryGate } from './components/EntryGate';
import { BackendWorld } from './worlds/BackendWorld';
import { FrontendWorld } from './worlds/FrontendWorld';
import { Chatbot } from './components/Chatbot';

function WorldSwitch() {
  const { view, world, toGate } = useWorld();
  return (
    <>
      <Background />
      {view === 'gate' && <EntryGate />}
      {view === 'world' && world === 'frontend' && <FrontendWorld onSwitch={toGate} />}
      {view === 'world' && world === 'backend' && <BackendWorld onSwitch={toGate} />}
      <Chatbot />
    </>
  );
}

export default function WorldRoot() {
  return (
    <WorldProvider>
      <WorldSwitch />
    </WorldProvider>
  );
}
