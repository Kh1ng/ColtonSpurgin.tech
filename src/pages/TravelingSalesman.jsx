import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import TSPChart from '../assets/TSPChart.png'

export default function TravelingSalesman() {
    return (
        <main className="ts-container">
            <a className="ts-back" href="#/"><FiArrowLeft aria-hidden="true" />Back to portfolio</a>
            <header className="ts-header">
                <h1>Traveling Salesman Problem</h1>
                <p className="ts-meta">Colton Spurgin — March 2, 2025</p>
            </header>

            <section className="ts-section">
                <h2>Introduction</h2>
                <p>
                    The <strong>Traveling Salesman Problem</strong> (TSP) is an NP-hard problem where a
                    salesman must visit N cities exactly once and return to the starting city while
                    minimizing total travel distance.
                </p>
                <p>
                    Brute force becomes impractical as N increases because its work grows factorially
                    (O(N!)). Heuristics such as genetic algorithms trade guaranteed optimality for
                    results that remain practical on larger datasets.
                </p>
                <p>This project implements both approaches and compares their performance.</p>
            </section>

            <section className="ts-section">
                <h2>Methodology</h2>
                <h3>Brute Force Approach</h3>
                <ul>
                    <li>Checks all possible routes and selects the shortest.</li>
                    <li>Guarantees optimality but scales <strong>factorially (O(N!))</strong>.</li>
                    <li>Feasible for around N ≤ 10, but impractical beyond that.</li>
                </ul>

                <h3>Genetic Algorithm (GA) Approach</h3>
                <ul>
                    <li>
                        Uses natural selection, crossover, mutation, and evolution to approximate an
                        optimal route.
                    </li>
                    <li>Computational complexity: O(N² * Generations), making it much more scalable.</li>
                    <li>Key parameters:
                        <ul>
                            <li>Population Size: 10 × Number of Cities</li>
                            <li>Generations: 100 × Number of Cities</li>
                            <li>Crossover Rate: 0.8</li>
                            <li>Mutation Rate: 0.2</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="ts-section">
                <h2>Results and Performance Comparison</h2>

                <div className="ts-table-wrap">
                    <table className="ts-table">
                        <caption>Runtime by number of cities</caption>
                        <thead>
                            <tr>
                                <th scope="col">Cities</th>
                                <th scope="col">Genetic algorithm</th>
                                <th scope="col">Brute force</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['3','140 ms','0 ms'],
                                ['4','250 ms','0 ms'],
                                ['5','363 ms','0 ms'],
                                ['6','473 ms','0 ms'],
                                ['7','701 ms','1 ms'],
                                ['8','911 ms','5 ms'],
                                ['9','1145 ms','47 ms'],
                                ['10','1413 ms','449 ms'],
                                ['11','1664 ms','5492 ms'],
                                ['12','1978 ms','67490 ms'],
                                ['15','2349 ms','3+ hours'],
                                ['16','3569 ms','Not run'],
                                ['17','4150 ms','Not run'],
                                ['18','4762 ms','Not run'],
                                ['19','5413 ms','Not run'],
                                ['20','6057 ms','Estimated 700+ years'],
                            ].map((row) => (
                                <tr key={row[0]}>
                                    <td>{row[0]}</td>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="ts-chart">
                    <img src={TSPChart} alt="Runtime comparison for the Traveling Salesman benchmark" className="ts-chart-img" loading="lazy" />
                </div>
            </section>

            <section className="ts-section">
                <h2>Observations</h2>
                <ul>
                    <li>Brute force is faster on the smallest inputs, but runtime becomes impractical after 12 cities.</li>
                    <li>The genetic algorithm completes the 20-city run in about six seconds.</li>
                    <li>The trade-off is accuracy: the genetic algorithm can find a strong route without guaranteeing the optimum.</li>
                </ul>
            </section>

            <section className="ts-section">
                <h2>Conclusion</h2>
                <ul>
                    <li>Brute force is useful when the input is small enough to exhaust every route.</li>
                    <li>The genetic algorithm remains practical as the input grows, with no guarantee that its route is optimal.</li>
                </ul>
            </section>
        </main>
    )
}
