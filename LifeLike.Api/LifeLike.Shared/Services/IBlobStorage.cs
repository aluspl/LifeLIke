﻿using LifeLike.Shared.Enums;
using System;
using System.IO;
using System.Threading.Tasks;

namespace LifeLike.Shared.Services
{
    public interface IBlobStorage
    {
        Task<String> Create(Stream stream, string fileName);
        Result Remove(string fileName);
    }
}
