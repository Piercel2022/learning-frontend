// File: src/components/Dashboard.jsx
import React from 'react';
import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy Data
const courses = [
  { id: 1, title: 'Ruby Basics', completedLessons: 5, totalLessons: 10 },
  { id: 2, title: 'Rails Advanced', completedLessons: 3, totalLessons: 6 },
];

const lessonStatusData = [
  { name: 'Completed', value: 8 },
  { name: 'Incomplete', value: 6 },
];

const COLORS = ['#4caf50', '#f44336'];

const Dashboard = () => {
  // Calculate overall progress
  const totalLessons = courses.reduce((sum, course) => sum + course.totalLessons, 0);
  const completedLessons = courses.reduce((sum, course) => sum + course.completedLessons, 0);
  const overallProgress = (completedLessons / totalLessons) * 100;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>

      {/* Overall Progress */}
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h6">Overall Progress</Typography>
        <LinearProgress
          variant="determinate"
          value={overallProgress}
          sx={{ height: 10, marginTop: 2 }}
        />
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {`Completed ${completedLessons} out of ${totalLessons} lessons (${Math.round(
            overallProgress
          )}%)`}
        </Typography>
      </Paper>

      {/* Course List */}
      <Grid container spacing={2} marginBottom={4}>
        {courses.map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">{course.title}</Typography>
              <Typography variant="body2">
                {`Completed ${course.completedLessons} of ${course.totalLessons} lessons`}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(course.completedLessons / course.totalLessons) * 100}
                sx={{ height: 8, marginTop: 1 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Lesson Status Pie Chart */}
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6">Lesson Status</Typography>
        <Box sx={{ height: 300, marginTop: 2 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={lessonStatusData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {lessonStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;