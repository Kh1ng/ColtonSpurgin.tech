import React from 'react'
import ProjectCard from '../components/ProjectCard'
import logo from '../assets/logo.png'
import CarbonTSP from '../assets/CarbonTSP.png'
import BorkIcon from '../assets/bork.ico'
import Network from '../assets/Network.png'
import LLM from '../assets/LLM.png'

const projects = [
	{
		title: 'Bork',
		description: `A dog themed twitter clone built using TypeScript, NextJS, and Tailwind. Migrated between
        multiple database and authentication providers as free/hobby tiers changed.`,
		repo: 'https://github.com/Kh1ng/bork',
		demo: 'https://bork.coltonspurgin.tech',
		screenshots: [BorkIcon],
		tech: ['Vite', 'NextJS', 'Tailwind', 'TypeScript'],
	},
    {
        title: 'VeLLM',
        description: `A tauri based cross platform client for use with self hosted Ollama models. 
        Still a work in progress`,
        repo: 'https://github.com/Kh1ng/llm-chat',
        // demo: 'https://VeLLM.coltonspurgin.tech',
        screenshots: [LLM],
        tech: ['React', 'Vite', 'Tailwind', 'Tauri', 'Rust', 'iOS'],
    },
    {
        title: 'Traveling Salesman Problem Benchmarks',
        description: `Designed and implemented a benchmarking framework in C++ to compare multiple algorithmic 
        approaches to the Traveling Salesman Problem. Evaluated exact and heuristic solutions for performance, 
        scalability, and accuracy then compiled into a formal report found under the live demo.`,
        repo: 'https://github.com/Kh1ng/TSP',
        demo: '/travelingsalesman',
        screenshots: [CarbonTSP],
        tech: ['C++', 'Genetic Algorithms', 'Datastructures'],
    },
    {
        title: 'Home Lab',
        description: 'Ansible Automation for my Home Lab, private repos at the moment.',
        // repo: 'https://github.com/Kh1ng/another-example',
        // demo: 'https://another-example.com',
        screenshots: [Network],
        tech: ['Ansible', 'Proxmox', 'Docker', 'Linux'],
    },
    {
		title: 'This Website',
		description: 'Personal website built with Vite, React, and Tailwind.',
		repo: 'https://github.com/Kh1ng/ColtonSpurgin.tech',
		demo: '/',
		screenshots: [logo],
		tech: ['React', 'Vite'],
	},
]

export default function Projects() {
	return (
        <main className="projects-container">
            <header className="projects-header">
                <h1 className="page-title">Projects</h1>
                <p className="page-subtitle">A selection of projects — click through for source or live demos.</p>
            </header>

            <section className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </section>
        </main>
	)
}
