using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ProfanityFilter
{
    /// <summary>
    /// Query options for the Profanity Filter API
    /// </summary>
    public class ProfanityFilterQueryOptions
    {
        /// <summary>
        /// The text to filter profanity words from
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The mask to replace the profanity words with. Should be a Single Character (e.g., *)
        /// </summary>
        [JsonProperty("mask")]
        public string Mask { get; set; }
    }
}
