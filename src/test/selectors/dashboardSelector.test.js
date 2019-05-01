import * as selectors from '../../selectors/dashboardSelector';
import { mockState } from '../setup';

describe('dashboardSelector', () => {
  it('should return the right value', () => {
    const result = selectors.dashboardSelector(mockState);
    expect(result).toEqual(mockState.dashboard);
  });
});

describe('getDashboard selector', () => {
  it('should return the right value', () => {
    const result = selectors.getDashboard(mockState);
    expect(result).toEqual(mockState.dashboard);
  });
});

describe('getDashboardSummary selector', () => {
  it('should return the right value without contents', () => {
    const result = selectors.getDashboardSummary(mockState);
    expect(result).toEqual({
      articles: 0,
      comments: 0,
      claps: 0,
    });
  });
  it('should return the right value with contents', () => {
    mockState.dashboard.articles = [{
      claps: 1,
      comments: 1,
    }];
    const result = selectors.getDashboardSummary(mockState);
    expect(result).toEqual({
      articles: 0,
      comments: 0,
      claps: 0,
    });
  });
});
