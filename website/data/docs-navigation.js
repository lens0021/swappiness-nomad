// The root folder for this documentation category is `pages/docs`
//
// - A string refers to the name of a file
// - A "category" value refers to the name of a directory
// - All directories must have an "index.mdx" file to serve as
//   the landing page for the category

export default [
  {
    category: 'install',
    content: [
      { category: 'quickstart' },
      {
        category: 'production',
        content: [
          'requirements',
          'nomad-agent',
          'reference-architecture',
          'deployment-guide'
        ]
      },
      'windows-service'
    ]
  },
  { category: 'upgrade', content: ['upgrade-specific'] },
  {
    category: 'integrations',
    content: ['consul-integration', 'consul-connect', 'vault-integration']
  },
  '-----------',
  {
    category: 'internals',
    content: [
      'architecture',
      { category: 'plugins', content: ['base', 'task-drivers', 'devices', 'csi'] },
      {
        category: 'scheduling',
        content: ['scheduling', 'preemption']
      },
      'consensus',
      'gossip',
      'security'
    ]
  },
  {
    category: 'configuration',
    content: [
      'acl',
      'audit',
      'autopilot',
      'client',
      'consul',
      'plugin',
      'sentinel',
      'server',
      'server_join',
      'telemetry',
      'tls',
      'vault'
    ]
  },
  {
    category: 'commands',
    content: [
      {
        category: 'acl',
        content: [
          'bootstrap',
          'policy-apply',
          'policy-delete',
          'policy-info',
          'policy-list',
          'token-create',
          'token-delete',
          'token-info',
          'token-list',
          'token-self',
          'token-update'
        ]
      },
      'agent',
      'agent-info',
      {
        category: 'alloc',
        content: ['exec', 'fs', 'logs', 'restart', 'signal', 'status', 'stop']
      },
      {
        category: 'deployment',
        content: ['fail', 'list', 'pause', 'promote', 'resume', 'status', 'unblock']
      },
      'eval-status',
      {
        category: 'job',
        content: [
          'deployments',
          'dispatch',
          'eval',
          'history',
          'init',
          'inspect',
          'plan',
          'periodic-force',
          'promote',
          'revert',
          'run',
          'status',
          'stop',
          'validate'
        ]
      },
      {
        category: 'license',
        content: ['get', 'put']
      },
      'monitor',
      {
        category: 'namespace',
        content: ['apply', 'delete', 'inspect', 'list', 'status']
      },
      {
        category: 'node',
        content: ['config', 'drain', 'eligibility', 'status']
      },
      {
        category: 'operator',
        content: [
          'autopilot-get-config',
          'autopilot-set-config',
          'debug',
          'keygen',
          'keyring',
          'raft-list-peers',
          'raft-remove-peer',
          'snapshot-agent',
          'snapshot-inspect',
          'snapshot-restore',
          'snapshot-save'
        ]
      },
      { category: 'plugin', content: ['status'] },
      {
        category: 'quota',
        content: ['apply', 'delete', 'init', 'inspect', 'list', 'status']
      },
      { category: 'sentinel', content: ['apply', 'delete', 'list', 'read'] },
      { category: 'server', content: ['force-leave', 'join', 'members'] },
      'status',
      { category: 'system', content: ['gc', 'reconcile-summaries'] },
      'ui',
      'version',
      { category: 'volume', content: ['deregister', 'detach', 'status', 'register'] }
    ]
  },
  '----------',
  {
    category: 'job-specification',
    content: [
      'artifact',
      'affinity',
      'check_restart',
      'connect',
      'constraint',
      'csi_plugin',
      'device',
      'dispatch_payload',
      'env',
      'ephemeral_disk',
      'expose',
      'gateway',
      'group',
      'job',
      'lifecycle',
      'logs',
      'meta',
      'migrate',
      'multiregion',
      'network',
      'parameterized',
      'periodic',
      'proxy',
      'reschedule',
      'resources',
      'restart',
      'scaling',
      'service',
      'sidecar_service',
      'sidecar_task',
      'spread',
      'task',
      'template',
      'update',
      'upstreams',
      'vault',
      'volume',
      'volume_mount'
    ]
  },
  {
    category: 'drivers',
    content: [
      'docker',
      'exec',
      'java',
      'podman',
      'qemu',
      'raw_exec',
      {
        category: 'external',
        content: [
          'containerd',
          'firecracker-task-driver',
          'jail-task-driver',
          'lxc',
          'pot',
          'rkt',
          'singularity',
          'nspawn',
          'iis'
        ]
      }
    ]
  },
  {
    category: 'devices',
    content: ['nvidia', 'community']
  },
  'schedulers',
  { category: 'runtime', content: ['environment', 'interpolation'] },
  {
    category: 'autoscaling',
    content: [
      'agent',
      'api',
      'cli',
      'policy',
      'telemetry',
      {
        category: 'plugins',
        content: [
          'apm',
          'strategy',
          'target'
        ]
      },
      {
        category: 'internals',
        content: [
          'checks'
        ]
      }
    ]
  },
  { category: 'telemetry', content: ['metrics'] },
  '------------',
  { category: 'enterprise' },
  'faq'
]
