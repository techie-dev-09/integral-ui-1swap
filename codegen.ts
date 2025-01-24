import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        'https://subgraph.satsuma-prod.com/edozies-team--34144/analytics/version/v0.0.1/api',
        'https://subgraph.satsuma-prod.com/edozies-team--34144/blocks/version/v0.0.1/api',
        'https://subgraph.satsuma-prod.com/edozies-team--34144/farms/version/v0.0.1/api',
    ],
    documents: 'src/graphql/queries/!(*.d).{ts,tsx}',
    generates: {
        'src/graphql/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                withHooks: true,
                withResultType: true,
            },
        },
    },
};

export default config;
