declare global {
    interface Document {
        ENV: {
            SANITY_PUBLIC_PROJECT_ID: string;
            SANITY_PUBLIC_DATASET: string;
            SANITY_PUBLIC_API_VERSION: string;
        };
    }
}

type ProjectDetails = {
    projectId: string;
    dataset: string;
    apiVersion: string;
};

export const projectDetails = (): ProjectDetails => {
    const {
        SANITY_PUBLIC_PROJECT_ID,
        SANITY_PUBLIC_DATASET,
        SANITY_PUBLIC_API_VERSION,
    } = typeof document === 'undefined' ? process.env : document.ENV;

    return {
        projectId: SANITY_PUBLIC_PROJECT_ID ?? '',
        dataset: SANITY_PUBLIC_DATASET ?? '',
        apiVersion: SANITY_PUBLIC_API_VERSION ?? `v2021-10-21`,
    };
};
