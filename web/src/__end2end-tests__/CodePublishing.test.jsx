import uuidv1 from 'uuid/v1';
import store from 'store';
import * as types from 'actions/actionTypes';
import MLRAuthApi from 'apis/MLAuthApi';
import CodeProjectPublishingApi from './apiMocks/CodeProjectPublishing.spike.ts';
import CommitsApiMock from './apiMocks/CommitMocks.spike.ts';
import ProjectApiMockSpike from './apiMocks/ProjectApiMock.spike.ts';
import UserApi from './apiMocks/UserApi.ts';

const api = new CodeProjectPublishingApi();
const userApi = new UserApi();
const authApi = new MLRAuthApi();
const projectApi = new ProjectApiMockSpike();
const commitsApiMock = new CommitsApiMock();

// TODO: this part is necessary to supply the API mocks with credentials
// As the apiMocks are removed from this test, these lines can also be removed
// eslint-disable-next-line camelcase
let removeMe_user;
// eslint-disable-next-line camelcase
let removeMe_email;
// eslint-disable-next-line camelcase
let removeMe_pass;
// end todo

beforeAll(async () => {
  // ------------- create the user ------------- //
  const suffix = uuidv1().toString().split('-')[0];
  const username = `TEST-CodeProjectPublishing.${suffix}`;
  const password = 'password';
  const email = `TEST-Node.${suffix}@example.com`;
  const registerData = {
    username,
    email,
    password,
    name: username,
  };
  const registerResponse = await userApi.register(registerData);
  expect(registerResponse.ok).toBeTruthy();

  // ----------- login with newly create user ----------- //
  console.log('Running end2end tests against localhost:80 -> expecting proxy to redirect to $INSTANCE_HOST');
  if (!store.getState().user.isAuth) {
    await authApi.login(username, email, password)
      .then((user) => store.dispatch({ type: types.LOGIN, user }));
  }

  // TODO: this part is necessary to supply the API mocks with credentials
  // As the apiMocks are removed from this test, these lines can also be removed
  // eslint-disable-next-line camelcase
  removeMe_user = username;
  // eslint-disable-next-line camelcase
  removeMe_email = email;
  // eslint-disable-next-line camelcase
  removeMe_pass = password;
  // end todo
});

test('Can create new user, new code project, commit file and publish code project', async () => {
  jest.setTimeout(30000);
  //
  // ----------- login with the user ----------- //
  // TODO: this part is necessary to supply the API mocks with credentials
  // As the apiMocks are removed from this test, these lines can also be removed
  // eslint-disable-next-line camelcase
  const loginData = {
    username: removeMe_user,
    email: removeMe_email,
    password: removeMe_pass,
  };
  const loginResp = await userApi.login(loginData);
  expect(loginResp.ok).toBe(true);
  const resgistrationBody = await loginResp.json();
  expect(resgistrationBody.access_token).toBeDefined();

  const headers = {
    'Content-type': 'Application/json',
    'PRIVATE-TOKEN': `Bearer ${resgistrationBody.access_token}`,
    Authorization: `Bearer ${resgistrationBody.access_token}`,
  };

  //
  // ----------- create a new project ----------- //
  //
  const body = JSON.stringify({
    name: 'Can publish code project',
    slug: 'can-publish-code-project',
    namespace: '',
    initialize_with_readme: true,
    description: '',
    visibility: 'public',
    input_data_types: [],
  });
  const projectCreationResp = await projectApi.create(headers, body);
  const creationProjRespBody = await projectCreationResp.json();
  expect(projectCreationResp.ok).toBeTruthy();

  const { id: projectId, gitlab_id: gid } = creationProjRespBody;

  //
  // -------- Commit the project recently created -------- //
  //
  const commitResp = await commitsApiMock.performCommit(
    gid,
    'README.md',
    // eslint-disable-next-line camelcase
    `File committed by ${removeMe_user}`,
    'master',
    'some message',
    'update',
    'text',
    headers,
  );

  expect(commitResp.ok).toBeTruthy();

  //
  // -------- Publish the Project -------- //
  //
  const publishingRes = await api.publish(
    headers,
    projectId,
    JSON.stringify({
      name: 'Just a testing project 1',
      slug: 'just-a-testing-project-1',
      namespace: 'andres.ausecha',
      initialize_with_readme: true,
      description: '',
      visibility: 'public',
      input_data_types: [],
    }),
  );

  console.log('################### Publishing Response');
  console.log(publishingRes);
  console.log('################### Publishing Response Body');
  console.log(await publishingRes.json());
  expect(publishingRes.ok).toBeTruthy();

  //
  // -------- Verify Publishing status -------- //
  //
  console.log('################### Get Project');
  const projectReadResponse = await projectApi.get(headers, projectId);
  expect(projectReadResponse.ok).toBeTruthy();

  //
  // -------- Remove project at the end of the test -------- //
  //  At least removing the project automatically we do not fill the database of garbage
  //
//  const projDeletionResp = await projectApi.delete(projectId, headers);
//  expect(projDeletionResp.ok).toBeTruthy();
});