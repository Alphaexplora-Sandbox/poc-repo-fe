import { SERVICE_NAME } from '../../src/index';

describe('poc-repo-frontend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('poc-repo-frontend');
  });
});