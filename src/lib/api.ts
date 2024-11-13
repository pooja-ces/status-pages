export async function fetchApiStatus(apiName: string): Promise<number> {
    const response = await fetch(`/api/status/${apiName}`);
    return response.status;
}
