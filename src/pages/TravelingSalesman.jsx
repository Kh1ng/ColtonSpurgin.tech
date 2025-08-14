import React from 'react'
import TSPChart from '../assets/TSPChart.png'

export default function TravelingSalesman() {
    const TravelingSalesmanChart = TSPChart 

    return (
        <main className="ts-container">
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
                    Brute force solutions become impractical as N increases due to factorial
                    complexity (O(N!)), making nondeterministic approaches like Genetic Algorithms
                    essential for larger datasets.
                </p>
                <p>This project implements both approaches and compares their performance.</p>
            </section>

            <section className="ts-section">
                <h2>Methodology</h2>
                <h3>Brute Force Approach</h3>
                <ul>
                    <li>Checks all possible routes and selects the shortest.</li>
                    <li>Guarantees optimality but scales <strong>exponentially (O(N!))</strong>.</li>
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

                <table className="ts-table">
                    <thead>
                        <tr>
                            <th>Data Size</th>
                            <th>Genetic</th>
                            <th>Brute Force</th>
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
                            ['15','2349 ms','(3+ Hours)'],
                            ['16','3569 ms','X'],
                            ['17','4150 ms','X'],
                            ['18','4762 ms','X'],
                            ['19','5413 ms','X'],
                            ['20','6057 ms','(Est. 700+ Years)'],
                        ].map((row) => (
                            <tr key={row[0]}>
                                <td className="ts-td">{row[0]}</td>
                                <td className="ts-td">{row[1]}</td>
                                <td className="ts-td">{row[2]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="ts-chart">
                    <p>Chart:</p>
                    <img src={TravelingSalesmanChart} alt="TSP run chart" className="ts-chart-img" />
                </div>
            </section>

            <section className="ts-section">
                <h2>Observations</h2>
                <ul>
                    <li>Brute Force is not optimal for scale: faster for N &lt; 5, but breaks at N = 12+.</li>
                    <li>GA scales efficiently: solves N = 20 in ~6 sec instead of centuries.</li>
                    <li>Trade-off: GA doesn’t guarantee absolute optimality but finds near-optimal solutions in reasonable time.</li>
                </ul>
            </section>

            <section className="ts-section">
                <h2>Conclusion</h2>
                <ul>
                    <li>Brute Force is only viable for N ≤ 10; beyond that it becomes impractical.</li>
                    <li>Genetic Algorithm provides a scalable, efficient alternative, solving 20-city TSP in seconds instead of centuries.</li>
                </ul>
            </section>
        </main>
    )
}

