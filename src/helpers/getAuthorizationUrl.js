function getAuthorizationUrl(clientId, redirectUri, scope) {
    const baseUrl = 'https://www.donationalerts.com/oauth/authorize'
    const responseType = 'code'

    const url = new URL(baseUrl)
    url.searchParams.append('client_id', clientId)
    url.searchParams.append('redirect_uri', redirectUri)
    url.searchParams.append('response_type', responseType)
    url.searchParams.append('scope', scope)

    return url.toString()
}

export default getAuthorizationUrl
