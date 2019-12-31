﻿using System;

namespace LifeLike.Shared.Model
{
    public class Page
    {
        public string Id { get; set; }

        public string ShortName { get; set; }

        public string FullName { get; set; }

        public string Content { get; set; }

        public int PageOrder { get; set; }

        public string Category { get; set; }

        public string IconName { get; set; }

        public string ImageUrl { get; set; }

        public DateTime Published { get; set; }

        public string Summary { get; set; }

        public string ContentInHTML { get; set; }        
    }
}