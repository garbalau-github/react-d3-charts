import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data, width, height }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', 'lightblue')
      .style('border', '1px solid black');

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', generateScaledLine(data));
  }, [data, height, width]);

  return <svg ref={chartRef} />;
};

export default LineChart;
