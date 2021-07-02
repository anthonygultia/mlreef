export const dataProcessors = [{
  id: 'bc65cfbf-c09c-40ec-8bd5-d984ceb0e8b1',
  slug: 'ocr-with-tesseract',
  url: 'http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef/ocr-with-tesseract',
  owner_id: 'aaaa0000-0001-0000-0000-cccccccccccc',
  name: 'OCR with tesseract',
  gitlab_namespace: 'mlreef',
  gitlab_path: 'ocr-with-tesseract',
  gitlab_id: 1370,
  visibility_scope: 'PUBLIC',
  description: 'Decode images to text using pytesseract',
  tags: [],
  stars_count: 0,
  forks_count: 0,
  input_data_types: [],
  output_data_types: [],
  searchable_type: 'CODE_PROJECT',
  processorSelected: 0,
  processors: [
    {
      id: '110dce76-d28d-4350-988a-af7b40e550b0',
      slug: 'ocr-with-tesseract',
      name: 'OCR with tesseract Processor',
      input_data_type: [],
      output_data_type: [],
      type: 'OPERATION',
      visibility_scope: 'PUBLIC',
      description: 'OCR with pytesseract for english and german only',
      code_project_id: 'bc65cfbf-c09c-40ec-8bd5-d984ceb0e8b1',
      author_id: 'aaaa0000-0001-0000-0000-cccccccccccc',
      branch: 'master',
      version: '2',
      publish_started_at: '2021-05-16T19:33:30.848Z',
      publish_finished_at: '2021-05-16T19:35:52.138Z',
      status: 'PUBLISHED',
      model_type: null,
      ml_category: null,
      environment: {
        id: '870a0b67-f36b-40c8-9e76-560c32d5f3e8',
        title: 'Base environment tensorflow/tensorflow:2.1.0-gpu-py3',
        docker_image: 'tensorflow/tensorflow:2.1.0-gpu-py3',
        description: 'GPU nvidia drivers and TF 2.1, compatible python 3.6-3.8',
        requirements: '                                Ubuntu 20.04\n                                python 3.6.9\n                                tensorflow-gpu 2.1.0\n                                CUDA 10.1\n                                CUDNN 7',
        machine_type: 'GPU',
        sdk_version: '3.6.9',
      },
      parameters: [
        {
          id: 'c5130a54-3fa9-4445-83ae-2769b872df08',
          name: 'lang',
          type: 'STRING',
          order: 3,
          default_value: 'eng',
          required: true,
          group: '',
          description: 'possible values eng or deu',
        },
        {
          id: 'ad3a7149-94c2-4462-b484-a22fab415bf7',
          name: 'input-path',
          type: 'STRING',
          order: 1,
          default_value: 'images',
          required: true,
          group: '',
          description: 'Path to the images',
        },
        {
          id: '3aefaeb4-f8cd-4a63-b12d-a3e99c30af8e',
          name: 'output-path',
          type: 'STRING',
          order: 2,
          default_value: 'output',
          required: true,
          group: '',
          description: 'Path to save the images',
        },
        {
          name: 'horizontal-flip',
          description: '',
          type: 'BOOLEAN',
          required: true,
          order: 3,
          default_value: 'TRUE',
        },
        {
          name: 'vertical-flip',
          description: '',
          type: 'BOOLEAN',
          required: true,
          order: 4,
          default_value: 'TRUE',
        },
        {
          name: 'mode',
          default_value: '[{ "value": "gaussian" }, { "value": "localvar" }, { "value": "poisson" },{ "value": "salt" },{ "value": "pepper" },{ "value": "speckle" }]',
          description: 'noise mode it can take only these values: gaussian | localvar | poisson | salt | pepper | speckle',
          order: 2,
          required: false,
          type: 'STRING',
        },
      ],
      metrics_schema: null,
    },
  ],
  published: true,
  processor_type: 'OPERATION',
},
];

export const selectedFiles = [
  {
    id: '3a2ee6399e40604e6dd5cfcf4b702363709ff718',
    name: 'train',
    type: 'tree',
    path: 'train',
    mode: '040000',
    checked: true,
    disabled: false,
  },
];

export const jobs = [{
  "id": 551,
  "status": "success",
  "stage": "test",
  "name": "alive-eel-5052021164311-1",
  "ref": "data-pipeline/alive-eel-5052021164311-1",
  "tag": false,
  "coverage": null,
  "allow_failure": false,
  "created_at": "2021-05-18T21:10:51.160Z",
  "started_at": "2021-05-18T21:11:00.906Z",
  "finished_at": "2021-05-18T21:15:47.659Z",
  "duration": 286.753165,
  "user": {
    "id": 2,
    "name": "mlreef",
    "username": "mlreef",
    "state": "active",
    "avatar_url": "https://www.gravatar.com/avatar/d64636c9c4cf15dd5c9e1ed6ab529100?s=80&d=identicon",
    "web_url": "http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef",
    "created_at": "2021-01-05T00:42:07.179Z",
    "bio": null,
    "location": null,
    "public_email": "",
    "skype": "",
    "linkedin": "",
    "twitter": "",
    "website_url": "",
    "organization": null
  },
  "commit": {
    "id": "a7ed564a346548d5b6b0c99da8d2b7a1eedac78d",
    "short_id": "a7ed564a",
    "created_at": "2021-05-18T21:10:49.000+00:00",
    "parent_ids": [
      "2986a94bb3d661bc71f15910223a34e748227c6e"
    ],
    "title": "[skip ci] create .mlreef.yml",
    "message": "[skip ci] create .mlreef.yml",
    "author_name": "mlreef",
    "author_email": "mlreef@example.org",
    "authored_date": "2021-05-18T21:10:49.000+00:00",
    "committer_name": "mlreef",
    "committer_email": "mlreef@example.org",
    "committed_date": "2021-05-18T21:10:49.000+00:00"
  },
  "pipeline": {
    "id": 654,
    "sha": "a7ed564a346548d5b6b0c99da8d2b7a1eedac78d",
    "ref": "data-pipeline/civil-clownfish-18-05-2021-1",
    "status": "success",
    "created_at": "2021-05-18T21:10:51.150Z",
    "updated_at": "2021-05-18T21:15:47.738Z",
    "web_url": "http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef/sign-language-classifier/pipelines/654"
  },
  "web_url": "http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef/sign-language-classifier/-/jobs/551",
  "artifacts": [
    {
      "file_type": "trace",
      "size": 1755005,
      "filename": "job.log",
      "file_format": null
    }
  ],
  "runner": {
    "id": 416,
    "description": "K8S runner on review-master-8dyme2.35.246.253.255.nip.io",
    "ip_address": "10.14.9.2",
    "active": true,
    "is_shared": true,
    "name": "gitlab-runner",
    "online": false,
    "status": "offline"
  },
  "artifacts_expire_at": "2021-06-17T21:15:47.277Z"
},
{
  "id": 551,
  "status": "failed",
  "stage": "test",
  "name": "alive-eel-5052021164311-2",
  "ref": "data-pipeline/alive-eel-5052021164311-2",
  "tag": false,
  "coverage": null,
  "allow_failure": false,
  "created_at": "2021-05-18T21:10:51.160Z",
  "started_at": "2021-05-18T21:11:00.906Z",
  "finished_at": "2021-05-18T21:15:47.659Z",
  "duration": 286.753165,
  "user": {
    "id": 2,
    "name": "mlreef",
    "username": "mlreef",
    "state": "active",
    "avatar_url": "https://www.gravatar.com/avatar/d64636c9c4cf15dd5c9e1ed6ab529100?s=80&d=identicon",
    "web_url": "http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef",
    "created_at": "2021-01-05T00:42:07.179Z",
    "bio": null,
    "location": null,
    "public_email": "",
    "skype": "",
    "linkedin": "",
    "twitter": "",
    "website_url": "",
    "organization": null
  },
  "commit": {
    "id": "a7ed564a346548d5b6b0c99da8d2b7a1eedac78d",
    "short_id": "a7ed564a",
    "created_at": "2021-05-18T21:10:49.000+00:00",
    "parent_ids": [
      "2986a94bb3d661bc71f15910223a34e748227c6e"
    ],
    "title": "[skip ci] create .mlreef.yml",
    "message": "[skip ci] create .mlreef.yml",
    "author_name": "mlreef",
    "author_email": "mlreef@example.org",
    "authored_date": "2021-05-18T21:10:49.000+00:00",
    "committer_name": "mlreef",
    "committer_email": "mlreef@example.org",
    "committed_date": "2021-05-18T21:10:49.000+00:00"
  },
  "pipeline": {
    "id": 654,
    "sha": "a7ed564a346548d5b6b0c99da8d2b7a1eedac78d",
    "ref": "data-pipeline/civil-clownfish-18-05-2021-1",
    "status": "success",
    "created_at": "2021-05-18T21:10:51.150Z",
    "updated_at": "2021-05-18T21:15:47.738Z",
    "web_url": "http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef/sign-language-classifier/pipelines/654"
  },
  "web_url": "http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef/sign-language-classifier/-/jobs/551",
  "artifacts": [
    {
      "file_type": "trace",
      "size": 1755005,
      "filename": "job.log",
      "file_format": null
    }
  ],
  "runner": {
    "id": 416,
    "description": "K8S runner on review-master-8dyme2.35.246.253.255.nip.io",
    "ip_address": "10.14.9.2",
    "active": true,
    "is_shared": true,
    "name": "gitlab-runner",
    "online": false,
    "status": "offline"
  },
  "artifacts_expire_at": "2021-06-17T21:15:47.277Z"
},
]

export const processorDetails = {
  "id": "ca968c0968154210caa5c5679d97e2abbc2a6796", "short_id": "ca968c09", "created_at": "2021-05-16T19:33:31.000+00:00", "parent_ids": ["a89c69a5826d0caccf4cd1b13e601f0eee6d3bde"], "title": "Publish project 'OCR with tesseract' for branch 'master' and version '2'", "message": "Publish project 'OCR with tesseract' for branch 'master' and version '2'", "author_name": "mlreef", "author_email": "mlreef@example.org", "authored_date": "2021-05-16T19:33:31.000+00:00", "committer_name": "mlreef", "committer_email": "mlreef@example.org", "committed_date": "2021-05-16T19:33:31.000+00:00", "stats": { "additions": 57, "deletions": 0, "total": 57 }, "status": "success", "last_pipeline": { "id": 639, "sha": "ca968c0968154210caa5c5679d97e2abbc2a6796", "ref": "master", "status": "success", "created_at": "2021-05-16T19:33:31.910Z", "updated_at": "2021-05-16T19:35:55.180Z", "web_url": "http://gitlab.review-master-8dyme2.35.246.253.255.nip.io/mlreef/ocr-with-tesseract/pipelines/639" }, "project_id": 1370
}
