import { describe, it } from '@jest/globals';
import { staticDataProvider } from './staticData';

describe('staticDataProvider', () => {

  it('getServices should return the expected services data', async () => {
    // Arrange
    let services;

    // Act
    services = await staticDataProvider.getServices();

    // Assert
    expect(services).toBeDefined();
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);

    services.forEach(service => {
      expect(service).toHaveProperty('name');
      expect(service).toHaveProperty('regions');
      expect(service).toHaveProperty('status');
      service.regions.forEach(region => {
        expect(region).toHaveProperty('name');
        expect(region).toHaveProperty('status');
      });
    });
  });

  it('getExternalService should return the expected external services data', async () => {
    // Arrange
    let externalServices;

    // Act
    externalServices = await staticDataProvider.getExternalService();

    // Assert
    expect(externalServices).toBeDefined();
    expect(Array.isArray(externalServices)).toBe(true);
    expect(externalServices.length).toBeGreaterThan(0);

    externalServices.forEach(service => {
      expect(service).toHaveProperty('name');
      expect(service).toHaveProperty('link');
      expect(service).toHaveProperty('label');
    });
  });

  it('getMetrics should return the expected metrics data', async () => {
    // Arrange
    let metrics;

    // Act
    metrics = await staticDataProvider.getMetrics();

    // Assert
    expect(metrics).toBeDefined();
    expect(Array.isArray(metrics)).toBe(true);
    expect(metrics.length).toBeGreaterThan(0);

    metrics.forEach(metric => {
      expect(metric).toHaveProperty('name');
    });
  });

  it('getChartData should return the expected chart data', async () => {
    // Arrange
    let chartData;

    // Act
    chartData = await staticDataProvider.getChartData();

    // Assert
    expect(chartData).toBeDefined();
    expect(Array.isArray(chartData)).toBe(true);
    expect(chartData.length).toBeGreaterThan(0);

    chartData.forEach(data => {
      expect(data).toHaveProperty('title');
      expect(data).toHaveProperty('average');
      expect(data).toHaveProperty('time');
      expect(data).toHaveProperty('category');
      expect(data).toHaveProperty('data');
      expect(Array.isArray(data.category)).toBe(true);
      expect(Array.isArray(data.data)).toBe(true);
    });
  });

  it('getVersion should return the expected version data', async () => {
    // Arrange
    let versions;

    // Act
    versions = await staticDataProvider.getVersion();

    // Assert
    expect(versions).toBeDefined();
    expect(Array.isArray(versions)).toBe(true);
    expect(versions.length).toBeGreaterThan(0);

    versions.forEach(version => {
      expect(version).toHaveProperty('version');
      expect(version).toHaveProperty('schedule');
      expect(version).toHaveProperty('components');
      expect(version).toHaveProperty('dataCenters');
      expect(version).toHaveProperty('description');
      expect(Array.isArray(version.components)).toBe(true);
      expect(Array.isArray(version.dataCenters)).toBe(true);
      expect(Array.isArray(version.description)).toBe(true);
    });
  });

  it('getIncidents should return the expected incidents data', async () => {
    // Arrange
    let incidents;

    // Act
    incidents = await staticDataProvider.getIncidents();

    // Assert
    expect(incidents).toBeDefined();
    expect(incidents).toHaveProperty('mainIncidents');
    expect(incidents.mainIncidents).toHaveProperty('activeIncidents');
    expect(incidents.mainIncidents).toHaveProperty('activeMaintenances');
    expect(incidents.mainIncidents).toHaveProperty('dailyIncidents');
  });

  it('getHistoryData should return the expected history data', async () => {
    // Arrange
    let historyData;

    // Act
    historyData = await staticDataProvider.getHistoryData();

    // Assert
    expect(historyData).toBeDefined();
    expect(Array.isArray(historyData)).toBe(true);
    expect(historyData.length).toBeGreaterThan(0);

    historyData.forEach(entry => {
      expect(entry).toHaveProperty('date');
      expect(entry).toHaveProperty('title');
      expect(entry).toHaveProperty('description');
      expect(entry).toHaveProperty('components');
      expect(entry).toHaveProperty('centers');
      expect(entry).toHaveProperty('schedule');
      expect(entry).toHaveProperty('time');
      expect(entry).toHaveProperty('status');
      expect(entry).toHaveProperty('history');
      expect(Array.isArray(entry.description)).toBe(true);
      expect(Array.isArray(entry.components)).toBe(true);
      expect(Array.isArray(entry.centers)).toBe(true);
      expect(Array.isArray(entry.history)).toBe(true);

      entry.history.forEach(hist => {
        expect(hist).toHaveProperty('time');
        expect(hist).toHaveProperty('description');
      });
    });
  });
});
