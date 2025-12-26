'use client';

import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

const INDIA_TOPO_JSON = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const locations = [
  { name: "Dharamshala", coordinates: [76.3234, 32.2190] },
  { name: "Shimla", coordinates: [77.1734, 31.1048] },
  { name: "Goa", coordinates: [74.1240, 15.2993] },
  { name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { name: "Varanasi", coordinates: [82.9739, 25.3176] },
  { name: "Ayodhya", coordinates: [82.2047, 26.7991] },
  { name: "Agra", coordinates: [78.0081, 27.1767] },
  { name: "Manali", coordinates: [77.1887, 32.2396] },
  { name: "Jibhi", coordinates: [77.3491, 31.6346] },
  { name: "Shinkula Top", coordinates: [77.1517, 32.7586] },
  { name: "Jammu", coordinates: [74.8643, 32.7330] },
  { name: "Mussoorie", coordinates: [78.0644, 30.4598] },
  { name: "Dhanaulti", coordinates: [78.2500, 30.4500] },
  { name: "Haridwar", coordinates: [78.1642, 29.9457] },
  { name: "Rishikesh", coordinates: [78.2947, 30.1033] },
  { name: "Somnath", coordinates: [70.4010, 20.8880] },
  { name: "Dwarka", coordinates: [68.9685, 22.2442] },
  { name: "Diu", coordinates: [70.9874, 20.7144] },
  { name: "Nashik", coordinates: [73.7898, 19.9975] },
  { name: "Pune", coordinates: [73.8567, 18.5204] },
  { name: "Amritsar", coordinates: [74.8723, 31.6340] },
  { name: "Mathura", coordinates: [77.6737, 27.4924] },
  { name: "Kasol", coordinates: [77.3150, 32.0100] },
  { name: "Ujjain", coordinates: [75.7885, 23.1760] },
  { name: "Mahabaleshwar", coordinates: [73.6477, 17.9307] },
  { name: "Delhi-NCR", coordinates: [77.1025, 28.7041] },
];

export default function TravelMap() {
  return (
    <section className="section map-section">
      <div className="container">
        <h2 className="section-title">Where I've Been</h2>
        <p className="section-subtitle">Exploring the diverse landscapes of India.</p>

        <div className="map-container">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1000,
              center: [78.9629, 22.5937] // Center of India
            }}
            width={800}
            height={600}
            style={{ width: "100%", height: "auto" }}
          >
            <ZoomableGroup center={[78.9629, 22.5937]} zoom={1}>
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1a1f2c"
                      stroke="#2a3042"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#2a3042", outline: "none" },
                        pressed: { fill: "#1a1f2c", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {locations.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle
                    r={4}
                    fill="var(--color-accent)"
                    stroke="#fff"
                    strokeWidth={1}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={name}
                    className="marker-circle"
                  />
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
          <Tooltip id="my-tooltip" style={{ backgroundColor: "var(--color-primary)", color: "#fff" }} />
        </div>
      </div>

      <style jsx>{`
        .map-section {
          background-color: var(--color-surface);
          text-align: center;
          padding: 4rem 0;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-xs);
        }

        .section-subtitle {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-lg);
        }

        .map-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          background: transparent;
          border-radius: 8px;
          overflow: hidden;
        }

        :global(.marker-circle) {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        :global(.marker-circle:hover) {
          r: 6;
          fill: #fff;
          stroke: var(--color-accent);
        }
      `}</style>
    </section>
  );
}
