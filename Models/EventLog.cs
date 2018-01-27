﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using LifeLike.ApiModels;

namespace LifeLike.Models
{
    public class EventLog
    {
        [Key]
        public long Id { get; set; }
        public EventLogType Type { get; set; }
        public string Messages { get; set; }
        public string StackTrace {  get; set; }
        public DateTime EventTime { get; set;  }

        public static EventLog Generate(EventLogApiModel model)
        {
            return new EventLog
            {
                Type = (EventLogType)model.Type,
                Messages = model.Messages,
                StackTrace = model.StackTrace,
                EventTime=DateTime.Now
            };
        }

        public static EventLog Generate(Exception model)
        {
            return new EventLog
            {
                EventTime = DateTime.Now,
                Type = EventLogType.Error,
                Messages = model.Message,
                StackTrace = model.StackTrace
            };
        }

        internal static EventLog Generate(WebHookDataModel model)
        {
            return new EventLog
            {
                    Type=EventLogType.Unity,
                    Messages=$"Unity Project: {model?.projectName}, Platform: {model?.platform}",
                    EventTime=DateTime.Now
            };
        }

        public static EventLog Generate(EventLogType result, string message)
        {
              return new EventLog
                        {
                            Type = result,
                            Messages = message,
                            EventTime=DateTime.Now
                        };        
        }

        public static EventLog Generate(string id, string action, string controller)
        {
            return new EventLog
            {
                Type = EventLogType.Statistic,
                Messages = $"{id}; {action}; {controller}",
                EventTime=DateTime.Now
            };                
        }

        internal static EventLog Generate(int i, string information)
        {
             return new EventLog
            {
                Type = EventLogType.Info,
                Messages = $"{i}; {information}",
                EventTime=DateTime.Now
            };          
        }
    }

    public enum EventLogType
    {
        Info=0,
        Error=1,
        Warning=2,
        Statistic=4,
        Unity = 8,
    }
    
}