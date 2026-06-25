// ============================================
// PROJECT DATA - Easy to Update
// ============================================

// PROJECT UPDATES - Add new updates here
const projectUpdates = [
    {
        date: "June 25, 2026",
        title: "Professional Website Launch",
        description: "Deployed professional presentation website with dynamic content management. 9 professional SVG diagrams integrated for visual communication."
    },
    {
        date: "June 25, 2026",
        title: "Team Repository Complete",
        description: "GitHub repository fully set up with 4 team members, professional branching structure, and comprehensive contribution guidelines."
    },
    {
        date: "June 24, 2026",
        title: "Original Codebase Deployed",
        description: "Complete ROS2 + Nav2 stack written from scratch. CARLA bridge, localization nodes, and safety modules implemented and tested."
    },
    {
        date: "June 23, 2026",
        title: "Architecture Finalized",
        description: "4-layer professional architecture designed: Hardware → ROS2 → Navigation2 → Application. Hardware-agnostic design for sim-to-real transfer."
    },
    {
        date: "June 20, 2026",
        title: "Project Initiated",
        description: "AVL Mentor Project begun. Goal: Develop professional autonomous navigation system combining CARLA simulation with ROS2 middleware."
    }
];

// TEAM INFORMATION
const teamInfo = {
    leader: {
        name: "Alexander",
        github: "arassal",
        role: "Project Lead",
        focus: "CARLA Integration, Architecture Design, Team Coordination",
        email: "alexander@assalfamily.com"
    },
    mentees: [
        {
            name: "jchy05",
            role: "Navigation & Planning",
            focus: "Nav2 Configuration, Path Planning, Controller Tuning"
        },
        {
            name: "AdamCastillo07",
            role: "Visualization & Monitoring",
            focus: "RViz Integration, Live Debugging, Performance Monitoring"
        },
        {
            name: "Adrian",
            github: "Ad-Tap",
            role: "Control Systems",
            focus: "Vehicle Dynamics, Steering Control, Hardware Tuning"
        }
    ]
};

// PERFORMANCE METRICS
const performanceMetrics = {
    controlLoop: {
        value: "20",
        unit: "Hz",
        description: "Deterministic control cycle"
    },
    latency: {
        value: "40-50",
        unit: "ms",
        description: "End-to-end system latency"
    },
    cpuUsage: {
        value: "30-40",
        unit: "%",
        description: "Per control cycle"
    },
    memory: {
        value: "2.5",
        unit: "GB",
        description: "Active memory footprint"
    },
    maxSpeed: {
        value: "8",
        unit: "m/s",
        description: "Safe operational limit"
    },
    safetyMargin: {
        value: "100",
        unit: "%",
        description: "Obstacle inflation radius"
    }
};

// VALIDATION STATUS
const validationStatus = {
    carla: {
        name: "CARLA Simulator",
        items: [
            "All towns (Town01-Town10) validated",
            "Multiple weather conditions tested",
            "Dynamic traffic scenarios working",
            "Pedestrian handling proven"
        ]
    },
    ros2: {
        name: "ROS2 Integration",
        items: [
            "20 Hz control loop stable",
            "40-50 ms end-to-end latency",
            "CPU efficiency: 30-40% utilization",
            "Memory footprint: 2.5 GB"
        ]
    },
    nav2: {
        name: "Navigation2 Stack",
        items: [
            "Pure pursuit controller tuned",
            "Costmap generation optimized",
            "Path planning validated",
            "Safety layers operational"
        ]
    },
    sensors: {
        name: "Multi-Sensor System",
        items: [
            "3-camera synchronization working",
            "Lidar integration complete",
            "IMU/GNSS publishing operational",
            "Time-synced data flow verified"
        ]
    }
};

// CAPABILITIES
const capabilities = [
    {
        icon: "🛣️",
        title: "Lane Following",
        description: "Regulated pure pursuit controller with adaptive lookahead",
        features: ["Adaptive lookahead distance", "Multi-lane support", "Curve handling", "Speed optimization"]
    },
    {
        icon: "🚧",
        title: "Obstacle Detection",
        description: "Lidar-based 2D costmap with emergency braking",
        features: ["Real-time lidar fusion", "Dynamic obstacle detection", "Emergency braking", "Inflation radius safety"]
    },
    {
        icon: "🚦",
        title: "Traffic Lights",
        description: "Automatic traffic light detection and enforcement",
        features: ["Light state detection", "Automatic stop/go", "Rule compliance", "Human-safe behavior"]
    },
    {
        icon: "📡",
        title: "Multi-Sensor Fusion",
        description: "3× RGB cameras, 64-ray lidar, IMU, and GNSS",
        features: ["3x HD cameras", "High-res lidar", "IMU + GNSS", "Time-synced data"]
    },
    {
        icon: "⚡",
        title: "Real-Time Control",
        description: "20 Hz deterministic control loop with 40-50ms latency",
        features: ["20 Hz loop rate", "50ms latency", "Efficient processing", "Deterministic timing"]
    },
    {
        icon: "🎨",
        title: "Live Visualization",
        description: "Real-time RViz costmap views and debugging",
        features: ["RViz costmaps", "Path visualization", "Trajectory tracking", "Performance metrics"]
    }
];

// TECHNOLOGY STACK
const techStack = {
    simulation: ["CARLA 0.10.0 UE5", "Python API", "Native ROS2"],
    robotics: ["ROS2 Humble", "DDS Middleware", "TF2 Library"],
    navigation: ["Navigation2", "Pure Pursuit", "Costmap 2D"],
    development: ["Python 3.10/3.11", "Ubuntu 22.04", "Git/GitHub"]
};

// ENVIRONMENT SUPPORT
const environmentSupport = [
    { name: "CARLA Towns", support: "Town01-Town10 ✓ All Tested" },
    { name: "Weather Conditions", support: "Clear, Rain, Fog, Sunset ✓" },
    { name: "Traffic Scenarios", support: "Light, Medium, Heavy ✓" },
    { name: "Pedestrian Detection", support: "Cross streets, Sidewalks ✓" },
    { name: "Edge Case Handling", support: "Occlusion, Shadows ✓" }
];

// NEXT MILESTONES
const nextMilestones = [
    {
        status: "pending",
        title: "Real vehicle hardware integration",
        description: "Mount cameras, lidar, and integration with vehicle CAN bus"
    },
    {
        status: "pending",
        title: "Camera calibration on physical platform",
        description: "Calibrate camera intrinsics, extrinsics, and sensor synchronization"
    },
    {
        status: "pending",
        title: "Closed-loop control validation",
        description: "Test steering and speed control on actual vehicle"
    },
    {
        status: "pending",
        title: "Traffic light detection on real traffic",
        description: "Validate traffic light recognition with real-world traffic lights"
    },
    {
        status: "pending",
        title: "Multi-vehicle coordination",
        description: "Implement and test multi-vehicle autonomous driving scenarios"
    }
];

// Repository Links
const repositoryLinks = {
    main: "https://github.com/arassal/carla-nav2-avl",
    contributing: "https://github.com/arassal/carla-nav2-avl/blob/main/CONTRIBUTION_GUIDE.md",
    contributors: "https://github.com/arassal/carla-nav2-avl/blob/main/CONTRIBUTORS.md"
};

// EXPORT DATA (for use in other scripts)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectUpdates,
        teamInfo,
        performanceMetrics,
        validationStatus,
        capabilities,
        techStack,
        environmentSupport,
        nextMilestones,
        repositoryLinks
    };
}
