import CounterStore from "../../stores/CounterStore";
import { fetchFakeCount } from "../../util/util";

jest.mock('../../util/util');

const fetchFakeCountMock = fetchFakeCount as jest.MockedFunction<typeof fetchFakeCount>;

describe('CounterStore', () => {
  let counterStore: CounterStore;

  beforeEach(() => {
    fetchFakeCountMock.mockClear();
    fetchFakeCountMock.mockReturnValue(Promise.resolve(0));
    counterStore = new CounterStore();
  });

  it('should fetch count from the server', async () => {
    fetchFakeCountMock.mockReturnValueOnce(Promise.resolve(5));

    await counterStore.fetchCountFromServer();
    expect(counterStore.count).toBe(5);
  });

  it('should set loading to false after fetching info', async () => {
    expect(counterStore.loading).toBe(false);
    const promise = counterStore.fetchCountFromServer();
    expect(counterStore.loading).toBe(true);
    await promise;
    expect(counterStore.loading).toBe(false);
  });

  it('should print Counter 2 is greater than 5', () => {
    const spy = jest.spyOn(console, 'log');

    counterStore.incrementCount2();
    counterStore.incrementCount2();
    counterStore.incrementCount2();
    counterStore.incrementCount2();
    counterStore.incrementCount2();
    counterStore.incrementCount2();
    expect(spy).toHaveBeenCalledWith("Mobx: when: Counter 2 is greater than 5");

    spy.mockRestore();
  });

  it('should update page title', () => {
    counterStore.increment();
    expect(document.title).toBe("Total count: 1");
  })

  it('should execute autorun reaction', () => {
    const spy = jest.spyOn(console, 'log');

    counterStore.incrementCount2();
    expect(spy).toHaveBeenCalledWith('MobX: autorun: Counter 2 state was updated', 1);
    counterStore.incrementCount2();
    expect(spy).toHaveBeenCalledWith('MobX: autorun: Counter 2 state was updated', 2);

    spy.mockRestore();
  })
});