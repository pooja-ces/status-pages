export async function fetchApiStatus(apiName: string): Promise<number> {
    try {
        const response = await fetch(`/api/status/${apiName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch status for ${apiName}: ${response.statusText}`);
        }
        return response.status;
    } catch (error) {
        console.error("Error fetching API status:", error);
        return -1;
    }
}
