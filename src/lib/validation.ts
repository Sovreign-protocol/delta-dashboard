/**
 * @module lib/validation
 * @description Zod schemas for client-side data validation and type safety.
 *
 * These schemas ensure that user input and API responses conform to expected
 * formats before being processed by components or hooks.
 */

import { z } from 'zod';

/**
 * Schema for a standard Stellar public key (G-address).
 * Validates the prefix (G) and the Base32 character set.
 */
export const AccountAddressSchema = z
  .string()
  .regex(/^G[A-Z2-7]{55}$/, 'Invalid Stellar account address');

/**
 * Schema for a Soroban contract ID (C-address).
 * Validates the prefix (C) and the 56-character length.
 */
export const ContractIdSchema = z
  .string()
  .regex(/^C[A-Z2-7]{55}$/, 'Invalid Soroban contract ID');

/**
 * Schema for monitoring rule configuration.
 * Defines the core fields required for displaying and editing rules in the UI.
 */
export const RuleConfigSchema = z.object({
  /** Unique identifier for the rule. */
  id: z.string().min(1),
  /** Human-readable name displayed in lists and cards. */
  name: z.string().min(1),
  /** Whether the rule is currently active. */
  enabled: z.boolean(),
  /** The alert severity level associated with this rule. */
  severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
});

/**
 * Schema for network configuration.
 */
export const NetworkConfigSchema = z.object({
  /** Internal network ID (e.g., 'mainnet', 'testnet'). */
  id: z.string(),
  /** Display name (e.g., 'Mainnet'). */
  name: z.string(),
  /** URL of the Horizon API provider. */
  horizonUrl: z.string().url(),
  /** URL of the Soroban RPC provider. */
  rpcUrl: z.string().url(),
});
