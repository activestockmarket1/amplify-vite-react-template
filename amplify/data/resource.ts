// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';

// Define a more complete type for ResourceProvider
type ResourceProvider = {
  resources: Record<string, unknown>;
};

const defaultResourceFactory = {
  getInstance: () => ({
    resources: {}  // Provide the required resources property
  } as ResourceProvider)
};

export const backend = defineBackend({
  constructFactories: defaultResourceFactory
});