import { useCallback, useState } from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import ProfileCard from '../components/ProfileCard';

type Profile = {
  id: string;
  name: string;
  email: string;
  website: string;
  skills: string[];
};

const profiles: Record<string, Profile> = {
  chris: {
    id: 'chris',
    name: 'Chris',
    email: 'chris@example.com',
    website: 'https://chris.dev',
    skills: ['React', 'Node.js', 'GraphQL'],
  },
  amy: {
    id: 'amy',
    name: 'Amy',
    email: 'amy@example.com',
    website: 'https://amy.dev',
    skills: ['Figma', 'UX/UI', 'Illustrator'],
  },
};

const initialNodes: Node[] = [
  {
    id: 'me',
    position: { x: 400, y: 200 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-16 h-16 rounded-full border-2 border-white" />
          <p className="text-white text-sm mt-1">me</p>
        </div>
      ),
    },
    type: 'default',
    style: { background: 'transparent', border: 'none' },
  },
  {
    id: 'amy',
    position: { x: 200, y: 200 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/22.jpg" className="w-16 h-16 rounded-full" />
          <p className="text-white text-sm mt-1">Amy</p>
        </div>
      ),
    },
    type: 'default',
    style: { background: 'transparent', border: 'none' },
  },
  {
    id: 'jessi',
    position: { x: 300, y: 80 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-16 h-16 rounded-full" />
          <p className="text-white text-sm mt-1">Jessi</p>
        </div>
      ),
    },
    type: 'default',
    style: { background: 'transparent', border: 'none' },
  },
  {
    id: 'chris',
    position: { x: 300, y: 320 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/men/5.jpg" className="w-16 h-16 rounded-full border-2 border-lime-500" />
          <p className="text-white text-sm mt-1">chris</p>
        </div>
      ),
    },
    type: 'default',
    style: { background: 'transparent', border: 'none' },
  },
  {
    id: 'sarah',
    position: { x: 500, y: 80 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/55.jpg" className="w-16 h-16 rounded-full" />
          <p className="text-white text-sm mt-1">Sarah</p>
        </div>
      ),
    },
    type: 'default',
    style: { background: 'transparent', border: 'none' },
  },
  {
    id: 'sam',
    position: { x: 600, y: 150 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/men/66.jpg" className="w-16 h-16 rounded-full" />
          <p className="text-white text-sm mt-1">Sam</p>
        </div>
      ),
    },
    type: 'default',
    style: { background: 'transparent', border: 'none' },
  },
  {
    id: 'anna',
    position: { x: 500, y: 320 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/99.jpg" className="w-16 h-16 rounded-full" />
          <p className="text-white text-sm mt-1">Anna</p>
        </div>
      ),
    },
    type: 'default',
    style: { background: 'transparent', border: 'none' },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1', source: 'me', target: 'amy', type: 'straight',style: { stroke: '#7DD3FC', strokeWidth: 2 } },
  { id: 'e2', source: 'me', target: 'jessi', type: 'straight',style: { stroke: '#7DD3FC', strokeWidth: 2 } },
  { id: 'e3', source: 'me', target: 'chris', type: 'straight',style: { stroke: '#7DD3FC', strokeWidth: 2 } },
  { id: 'e4', source: 'me', target: 'sarah', type: 'straight',style: { stroke: '#7DD3FC', strokeWidth: 2 } },
  { id: 'e5', source: 'me', target: 'sam', type: 'straight',style: { stroke: '#7DD3FC', strokeWidth: 2 } },
  { id: 'e6', source: 'me', target: 'anna', type: 'straight',style: { stroke: '#7DD3FC', strokeWidth: 2 } },
  { id: 'e7', source: 'amy', target: 'jessi', type: 'straight',style: { stroke: '#7DD3FC', strokeWidth: 1.5, strokeDasharray: '4 2' } },
];

export default function NetworkGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleNodeClick = useCallback((_: any, node: Node) => {
    const profile = profiles[node.id];
    if (profile) setSelectedProfile(profile);
  }, []);

  return (
    <div className="w-full h-full bg-black relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        zoomOnScroll={false}
        panOnDrag
      >
        <Controls />
      </ReactFlow>

      {selectedProfile && (
        <ProfileCard
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

  