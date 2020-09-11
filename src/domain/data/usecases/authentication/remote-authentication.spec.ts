import HttpPostClientSpy from '../../tests/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const httpPostClientSpy = new HttpPostClientSpy();

    const url = 'anyUrl';

    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
