'use client';

import React, { useState } from 'react';
import {
  PlusCircle,
  ArrowRight,
  Workflow,
  Bot,
  Mail,
  Database,
  RefreshCw,
  LucideProps,
  Smile,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const WorkflowBuilder = () => {
  const [nodes, setNodes] = useState([{ id: 1, type: 'trigger', icon: Bot, label: 'AI Trigger' }]);

  const nodeTypes = [
    { type: 'process', icon: RefreshCw, label: 'Process Data' },
    { type: 'database', icon: Database, label: 'Store Results' },
    { type: 'notify', icon: Mail, label: 'Send Notification' },
    { type: 'happy', icon: Smile, label: 'Happy Customer' },
  ];

  const addNode = (nodeType: {
    type: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >;
    label: string;
    id?: number;
  }) => {
    setNodes((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...nodeType,
      },
    ]);
  };

  return (
    <section className="w-full flex flex-col md:flex-row  items-center justify-around lg:px-10 bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-300 lg:py-20 gap-3" >
        <Image
          src="/workflow.jpg"
          alt="Workflow Automation"
          width={500}
          height={500}
          className="hidden md:block rounded-l-xl"
        />
      <div className="w-full m-0 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 primary-text">Build AI Workflows in Minutes</h2>
          <p className="text-gray-600">Drag and drop components to create powerful automation</p>
        </div>

        {/* Workflow Canvas */}
        <Card className="mb-8 bg-gray-50">
          <CardContent className="p-6">
            <div className="flex items-center flex-wrap gap-4">
              {nodes.map((node, index) => (
                <div key={node.id} className="flex items-center animate-fade-in">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                      <node.icon className="w-8 h-8 text-fuchsia-600" />
                    </div>
                    <span className="mt-2 text-sm text-gray-600">{node.label}</span>
                  </div>
                  {index < nodes.length - 1 && (
                    <ArrowRight className="mx-4 text-gray-400 animate-pulse" />
                  )}
                </div>
              ))}

              {nodes.length < 5 && (
                <button
                  className="w-16 h-16 group rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-fuchsia-500 transition-colors duration-200 md:mb-5"
                  onClick={() => addNode(nodeTypes[nodes.length - 1])}
                >
                  <PlusCircle className="w-8 h-8 text-gray-400 group-hover:text-fuchsia-600" />
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Available Components */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
          {nodeTypes.map((type) => (
            <Card
              key={type.label}
              className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-fuchsia-50 rounded-lg flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-fuchsia-600" />
                </div>
                <span className="font-medium">{type.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default WorkflowBuilder;
