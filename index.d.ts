declare module '@apiverve/profanityfilter' {
  export interface profanityfilterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface profanityfilterResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class profanityfilterWrapper {
    constructor(options: profanityfilterOptions);

    execute(callback: (error: any, data: profanityfilterResponse | null) => void): Promise<profanityfilterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: profanityfilterResponse | null) => void): Promise<profanityfilterResponse>;
    execute(query?: Record<string, any>): Promise<profanityfilterResponse>;
  }
}
