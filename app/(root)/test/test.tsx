"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Brain, Workflow, Zap, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkflowAnimation from "@/components/WorkflowAnimation";
import { FloatingNodes } from "@/components/FloatingNode";
import IntegrationBeams from "@/components/IntegrationBeams";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingNodes />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              AI-Powered Workflow
              <br />
              Made Simple
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your business processes with intelligent automation that learns and adapts to your needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Intelligent Workflow Creation</h2>
            <p className="text-xl text-muted-foreground">
              Build complex workflows with drag-and-drop simplicity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered",
                description: "Smart suggestions and automated optimizations for your workflows",
              },
              {
                icon: Workflow,
                title: "Visual Builder",
                description: "Intuitive drag-and-drop interface for creating complex workflows",
              },
              {
                icon: Bot,
                title: "Automation",
                description: "Automate repetitive tasks with intelligent robots",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-card hover:bg-card/80 transition-colors"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Demo Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground">
              Connect with your favorite tools in minutes
            </p>
          </div>
          <IntegrationBeams />
        </div>
      </section>

      {/* Workflow Demo Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold mb-6">
                Watch Your Workflows Come to Life
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how easy it is to create, modify, and optimize your business processes with our intuitive workflow builder.
              </p>
              <Button size="lg">
                Try It Now <Zap className="ml-2" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <WorkflowAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}