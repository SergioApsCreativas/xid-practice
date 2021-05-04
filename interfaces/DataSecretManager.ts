export interface DataSecretManager {
    ARN: string
    Name: string
    VersionId: string
    SecretString: string
    VersionStages: Array<string>
    CreatedDate: Date
}