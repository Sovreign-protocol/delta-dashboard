/**
 * @module lib/pulseer-client
 * @description API client for interacting with the Pulseer backend service.
 *
 * Currently, this client is in a "mock" state, providing deterministic data
 * for development and testing. It should be updated to perform real HTTP
 * fetches against the Pulseer API in production.
 */

import { MOCK_ACCOUNTS, MOCK_CONTRACTS, MOCK_EVENTS, MOCK_ALERTS, MOCK_RULES, MOCK_HEALTH } from './mock-data';
import { Account } from '@/types/account';
import { Contract } from '@/types/contract';
import { PulseerEvent } from '@/types/event';
import { Alert } from '@/types/alert';
import { Rule } from '@/types/rule';
import { HealthCheckResult } from '@/types/health';
import { SyncState } from '@/types/sync';

/**
 * Client class providing methods to fetch monitoring data.
 */
export class PulseerClient {
  private networkId: string;

  /**
   * Initialises the client for a specific network.
   *
   * @param networkId - The identifier of the network (e.g., 'mainnet', 'testnet').
   */
  constructor(networkId: string) {
    this.networkId = networkId;
  }

  /**
   * Fetches the list of accounts currently being watched on the network.
   *
   * @returns A promise resolving to an array of watched accounts.
   */
  async listWatchedAccounts(): Promise<Account[]> {
    return MOCK_ACCOUNTS.filter(a => a.network === this.networkId);
  }

  /**
   * Fetches the list of contracts currently being watched on the network.
   *
   * @returns A promise resolving to an array of watched contracts.
   */
  async listWatchedContracts(): Promise<Contract[]> {
    return MOCK_CONTRACTS.filter(c => c.network === this.networkId);
  }

  /**
   * Retrieves a stream of recent events normalised by the backend.
   *
   * @returns A promise resolving to an array of normalised events.
   */
  async listEvents(): Promise<PulseerEvent[]> {
    return MOCK_EVENTS.filter(e => e.network === this.networkId);
  }

  /**
   * Fetches all alerts triggered on the current network.
   *
   * @returns A promise resolving to an array of alerts.
   */
  async listAlerts(): Promise<Alert[]> {
    return MOCK_ALERTS.filter(a => a.network === this.networkId);
  }

  /**
   * Retrieves detailed information for a single alert.
   *
   * @param id - The unique ID of the alert.
   * @returns A promise resolving to the alert if found, otherwise undefined.
   */
  async getAlert(id: string): Promise<Alert | undefined> {
    return MOCK_ALERTS.find(a => a.id === id);
  }

  /**
   * Fetches the set of active monitoring rules.
   *
   * @returns A promise resolving to an array of rules.
   */
  async listRules(): Promise<Rule[]> {
    return MOCK_RULES;
  }

  /**
   * Retrieves the latest health check results for the network providers.
   *
   * @returns A promise resolving to an array of health check results.
   */
  async getHealth(): Promise<HealthCheckResult[]> {
    return MOCK_HEALTH;
  }

  /**
   * Fetches the current ingestion sync status for the network.
   *
   * @returns A promise resolving to an array of sync states.
   */
  async getSyncStatus(): Promise<SyncState[]> {
    return [
      {
        id: 'acc-sync',
        name: 'Account Activity Sync',
        status: 'synced',
        cursorValue: '123456',
        lastProcessedAt: new Date().toISOString(),
      }
    ];
  }
}

/**
 * Factory function to create a new PulseerClient instance.
 *
 * @param networkId - The target network.
 * @returns A configured PulseerClient.
 */
export const getPulseerClient = (networkId: string) => new PulseerClient(networkId);
