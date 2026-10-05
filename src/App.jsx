import React, { useState, useEffect } from 'react';

const API_HOST = 'http://localhost:5000';

// SVG Icons as components
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const PawIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 4.5 1-1 3-2.5 3-4.5 0-1.66-1.34-3-3-3zm-4.5-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm9 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-7.3-6.1C10.1 4.7 11 5.5 12 5.5s1.9-.8 2.8-1.6c.4-.4.4-1.1 0-1.5s-1.1-.4-1.5 0c-.5.5-.9.6-1.3.6s-.8-.1-1.3-.6c-.4-.4-1.1-.4-1.5 0s-.4 1.1 0 1.5z"/>
  </svg>
);

const ElectronicsIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
    <path d="M12 18h.01"/>
  </svg>
);

const KeyIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l1.5 1.5m-1.5-1.5L17 6m1.5 1.5L20 6"/>
  </svg>
);

const FileIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <path d="M14 2v6h6"/>
    <path d="M16 13H8m8 4H8"/>
  </svg>
);

const AllIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const BagIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 20h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3V4a3 3 0 0 0-6 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
    <path d="M9 6V4a1 1 0 0 1 2-1h2a1 1 0 0 1 1 1v2"/>
  </svg>
);

const ClothingIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20.38 3.46L16 6a2 2 0 0 1-2-1.73l-.43-2.58a1 1 0 0 0-1.94 0L11.2 4.3A2 2 0 0 1 9.2 6L4.82 3.46a1 1 0 0 0-1.42 1.12l1.6 8A2 2 0 0 0 7 14h2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6h2a2 2 0 0 0 2-1.42l1.6-8a1 1 0 0 0-1.42-1.12z"/>
  </svg>
);

const JewelryIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="14" r="6"/>
    <path d="M12 2L9 5h6l-3-3zm0 6l-2-2h4l-2 2z"/>
  </svg>
);

const OtherIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="1.5"/>
    <circle cx="5" cy="12" r="1.5"/>
    <circle cx="19" cy="12" r="1.5"/>
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.98.8l.9 4.5a1 1 0 01-.55 1.12L6.9 10.4a12 12 0 006.7 6.7l1-2.71a1 1 0 011.12-.55l4.5.9a1 1 0 01.8.98V19a2 2 0 01-2 2h-1C9.1 21 3 14.9 3 6V5z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

export default function App() {
  // Auth state
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('foundit_token') || '');
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Chat state
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [loadingConversations, setLoadingConversations] = useState(false);
  const [activeConversation, setActiveConversation] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatText, setChatText] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatSending, setChatSending] = useState(false);

  // Items listings state
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filtering & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('all'); // all, lost, found

  // Modals state
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loadingMatches, setLoadingMatches] = useState(false);

  // Report Form state
  const [formType, setFormType] = useState('lost');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Electronics',
    location: '',
    contactEmail: '',
    contactNumber: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // Validate stored token on load
  useEffect(() => {
    const checkAuth = async () => {
      if (!authToken) {
        setAuthChecked(true);
        return;
      }
      try {
        const res = await fetch(`${API_HOST}/api/auth/me`, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        const data = await res.json();
        if (data.success) {
          setCurrentUser(data.user);
        } else {
          localStorage.removeItem('foundit_token');
          setAuthToken('');
        }
      } catch (error) {
        console.error('Error validating session:', error);
      } finally {
        setAuthChecked(true);
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auth form handlers
  const handleAuthInputChange = (e) => {
    const { name, value } = e.target;
    setAuthForm(prev => ({ ...prev, [name]: value }));
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setAuthError('');
    setAuthForm({ name: '', email: '', password: '', phone: '' });
    // Clear any stale session so the full-page login/register gate reappears
    localStorage.removeItem('foundit_token');
    setAuthToken('');
    setCurrentUser(null);
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);
    try {
      const endpoint = authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const payload = authMode === 'login'
        ? { email: authForm.email, password: authForm.password }
        : { name: authForm.name, email: authForm.email, password: authForm.password, phone: authForm.phone };

      const res = await fetch(`${API_HOST}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem('foundit_token', data.token);
        setAuthToken(data.token);
        setCurrentUser(data.user);
      } else {
        setAuthError(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Auth error:', error);
      setAuthError('Network error. Check if backend server is running.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('foundit_token');
    setAuthToken('');
    setCurrentUser(null);
    setConversations([]);
    setActiveConversation(null);
    setIsInboxOpen(false);
  };

  // Fetch Items
  const fetchItems = async () => {
    try {
      setLoading(true);
      const url = new URL(`${API_HOST}/api/items`);
      if (activeTab !== 'all') url.searchParams.append('type', activeTab);
      if (selectedCategory !== 'all') url.searchParams.append('category', selectedCategory);
      if (searchTerm) url.searchParams.append('search', searchTerm);

      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Items whenever filters/tabs change
  useEffect(() => {
    fetchItems();
  }, [activeTab, selectedCategory, searchTerm]);

  // Fetch matches when an item is selected
  useEffect(() => {
    if (selectedItem) {
      const fetchMatches = async () => {
        try {
          setLoadingMatches(true);
          const res = await fetch(`${API_HOST}/api/items/matches/${selectedItem._id}`);
          const data = await res.json();
          if (data.success) {
            setMatches(data.matches);
          }
        } catch (error) {
          console.error('Error fetching matches:', error);
        } finally {
          setLoadingMatches(false);
        }
      };
      fetchMatches();
    } else {
      setMatches([]);
    }
  }, [selectedItem]);

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!authToken) {
      setIsReportOpen(false);
      openAuthModal('login');
      return;
    }

    setUploadProgress(true);
    setFormSuccessMessage('');

    try {
      const dataToSend = new FormData();
      dataToSend.append('title', formData.title);
      dataToSend.append('description', formData.description);
      dataToSend.append('category', formData.category);
      dataToSend.append('type', formType);
      dataToSend.append('location', formData.location);
      dataToSend.append('contactEmail', formData.contactEmail);
      dataToSend.append('contactPhone', formData.contactNumber);
      dataToSend.append('date', new Date(formData.date).toISOString());

      if (selectedFile) {
        dataToSend.append('image', selectedFile);
      }

      const res = await fetch(`${API_HOST}/api/items`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${authToken}` },
        body: dataToSend
      });

      const data = await res.json();
      if (data.success) {
        setFormSuccessMessage(`Success! Your ${formType} item has been reported.`);
        setFormData({
          title: '',
          description: '',
          category: 'Electronics',
          location: '',
          contactEmail: '',
          contactNumber: '',
          date: new Date().toISOString().split('T')[0]
        });
        setSelectedFile(null);
        // Refresh items list
        fetchItems();
        // Clear message after 3 seconds and close modal
        setTimeout(() => {
          setIsReportOpen(false);
          setFormSuccessMessage('');
        }, 2500);
      } else {
        alert(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Check if backend server is running.');
    } finally {
      setUploadProgress(false);
    }
  };

  // Resolve status handler
  const handleResolveItem = async (itemId) => {
    try {
      const res = await fetch(`${API_HOST}/api/items/${itemId}/resolve`, {
        method: 'PUT'
      });
      const data = await res.json();
      if (data.success) {
        setSelectedItem(prev => ({ ...prev, status: 'resolved' }));
        fetchItems();
      }
    } catch (error) {
      console.error('Error resolving item:', error);
    }
  };

  // Fetch the logged-in user's conversation inbox
  const fetchConversations = async () => {
    if (!authToken) return;
    try {
      setLoadingConversations(true);
      const res = await fetch(`${API_HOST}/api/chats`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      const data = await res.json();
      if (data.success) setConversations(data.conversations);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoadingConversations(false);
    }
  };

  const openInbox = () => {
    setIsInboxOpen(true);
    fetchConversations();
  };

  // Fetch messages for the active conversation
  const fetchChatMessages = async (conversationId, showLoading = false) => {
    if (!authToken || !conversationId) return;
    try {
      if (showLoading) setChatLoading(true);
      const res = await fetch(`${API_HOST}/api/chats/${conversationId}/messages`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      const data = await res.json();
      if (data.success) setChatMessages(data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      if (showLoading) setChatLoading(false);
    }
  };

  // Start (or resume) a chat about a specific item, then open it
  const openChatForItem = async (item) => {
    if (!authToken) {
      openAuthModal('login');
      return;
    }
    try {
      setChatLoading(true);
      const res = await fetch(`${API_HOST}/api/chats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({ itemId: item._id })
      });
      const data = await res.json();
      if (data.success) {
        setActiveConversation(data.conversation);
        setIsInboxOpen(true);
        await fetchChatMessages(data.conversation._id);
      } else {
        alert(data.message || 'Could not start a chat for this item.');
      }
    } catch (error) {
      console.error('Error starting chat:', error);
      alert('Network error. Check if backend server is running.');
    } finally {
      setChatLoading(false);
    }
  };

  const openConversation = (conversation) => {
    setActiveConversation(conversation);
    fetchChatMessages(conversation._id, true);
  };

  const closeChatPanel = () => {
    setIsInboxOpen(false);
    setActiveConversation(null);
    setChatMessages([]);
    setChatText('');
  };

  const backToInbox = () => {
    setActiveConversation(null);
    setChatMessages([]);
    fetchConversations();
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatText.trim() || !activeConversation) return;
    try {
      setChatSending(true);
      const res = await fetch(`${API_HOST}/api/chats/${activeConversation._id}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({ text: chatText.trim() })
      });
      const data = await res.json();
      if (data.success) {
        setChatText('');
        fetchChatMessages(activeConversation._id);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setChatSending(false);
    }
  };

  // Poll for new messages while a conversation is open
  useEffect(() => {
    if (!activeConversation) return;
    const interval = setInterval(() => {
      fetchChatMessages(activeConversation._id);
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeConversation]);

  // Helper: return appropriate placeholder images based on category if no image uploaded
  const getCategoryPlaceholder = (category) => {
    switch (category) {
      case 'Electronics':
        return 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400';
      case 'Keys':
        return 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=400';
      case 'Documents':
        return 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=400';
      case 'Pets':
        return 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400';
      case 'Bags':
        return 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=400';
      case 'Clothing':
        return 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400';
      case 'Jewelry':
        return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400';
      default:
        return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400';
    }
  };

  // While the stored session is being validated, show a small full-screen loader
  if (!authChecked) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        <div className="spinner" style={{ width: '36px', height: '36px' }} />
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading...</span>
      </div>
    );
  }

  // Require login/registration before any access to the site
  if (!currentUser) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div className="panel" style={{ width: '100%', maxWidth: '400px' }}>
          {/* Header */}
          <div style={{
            padding: '28px 24px 4px 24px',
            textAlign: 'center'
          }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '3px',
              background: 'var(--accent)',
              display: 'inline-block',
              marginBottom: '10px'
            }} />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '4px' }}>FoundIt</h1>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              {authMode === 'login'
                ? 'Log in to browse and report lost or found items.'
                : 'Create an account to get started.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div style={{ display: 'flex', gap: '10px', padding: '20px 24px 0 24px' }}>
            <button
              type="button"
              onClick={() => { setAuthMode('login'); setAuthError(''); }}
              style={{
                flex: 1,
                padding: '9px 0',
                border: '1px solid ' + (authMode === 'login' ? 'var(--accent)' : 'var(--border)'),
                background: authMode === 'login' ? '#eef1fb' : 'transparent',
                color: authMode === 'login' ? 'var(--accent)' : 'var(--text-muted)',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => { setAuthMode('register'); setAuthError(''); }}
              style={{
                flex: 1,
                padding: '9px 0',
                border: '1px solid ' + (authMode === 'register' ? 'var(--accent)' : 'var(--border)'),
                background: authMode === 'register' ? '#eef1fb' : 'transparent',
                color: authMode === 'register' ? 'var(--accent)' : 'var(--text-muted)',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleAuthSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {authMode === 'register' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  value={authForm.name}
                  onChange={handleAuthInputChange}
                  className="input"
                />
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                required
                value={authForm.email}
                onChange={handleAuthInputChange}
                className="input"
              />
            </div>

            {authMode === 'register' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +1 555 123 4567"
                  value={authForm.phone}
                  onChange={handleAuthInputChange}
                  className="input"
                />
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Password *</label>
              <input
                type="password"
                name="password"
                placeholder="At least 6 characters"
                required
                minLength={6}
                value={authForm.password}
                onChange={handleAuthInputChange}
                className="input"
              />
            </div>

            {authError && (
              <div className="panel" style={{
                padding: '10px 12px',
                background: 'var(--red-bg)',
                borderColor: 'var(--red)',
                color: 'var(--red)',
                fontSize: '0.83rem',
                fontWeight: 600,
              }}>
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="btn btn-primary"
              style={{ justifyContent: 'center', marginTop: '4px' }}
            >
              {authLoading ? 'Please wait...' : (authMode === 'login' ? 'Log In' : 'Create Account')}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* NAVBAR */}
      <nav className="panel" style={{
        margin: '20px 24px',
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '3px',
            background: 'var(--accent)',
            display: 'inline-block'
          }} />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)'
          }}>
            FoundIt
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button className="btn" onClick={openInbox}>
            <ChatIcon /> Messages
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setIsReportOpen(true)}
          >
            <PlusIcon /> Report Item
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '4px' }}>
            <span style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'var(--indigo-bg)',
              color: 'var(--indigo)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}>
              {currentUser.name.charAt(0).toUpperCase()}
            </span>
            <button className="btn" onClick={handleLogout}>Log out</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="main-container" style={{
        marginTop: '50px',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '2.6rem',
          lineHeight: '1.2',
          fontWeight: 800,
          marginBottom: '16px',
          color: 'var(--text-main)'
        }}>
          Lost something? Found something?
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          maxWidth: '580px',
          margin: '0 auto 36px auto',
          fontSize: '1.05rem',
          lineHeight: '1.6',
        }}>
          Report lost or found items, browse current listings, and get connected with matching reports from other people nearby.
        </p>

        {/* SEARCH BAR (Center) */}
        <div
          className="panel"
          style={{
            maxWidth: '650px',
            margin: '0 auto 44px auto',
            padding: '4px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ color: 'var(--text-dim)', display: 'flex', alignItems: 'center' }}>
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search for an item (e.g. iPhone, Toyota keys, brown wallet)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              flex: 1,
              color: 'var(--text-main)',
              fontSize: '1rem',
              padding: '12px 4px',
              fontFamily: 'var(--font-primary)'
            }}
          />
        </div>

        {/* CATEGORIES */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '60px',
          }}
        >
          {[
            { id: 'all', label: 'All Items', icon: <AllIcon /> },
            { id: 'Electronics', label: 'Electronics', icon: <ElectronicsIcon /> },
            { id: 'Keys', label: 'Keys', icon: <KeyIcon /> },
            { id: 'Documents', label: 'Documents', icon: <FileIcon /> },
            { id: 'Pets', label: 'Pets', icon: <PawIcon /> },
            { id: 'Bags', label: 'Bags & Wallets', icon: <BagIcon /> },
            { id: 'Clothing', label: 'Clothing & Accs', icon: <ClothingIcon /> },
            { id: 'Jewelry', label: 'Jewelry & Watches', icon: <JewelryIcon /> },
            { id: 'Other', label: 'Other', icon: <OtherIcon /> }
          ].map((cat) => (
            <div
              key={cat.id}
              className={`panel panel-hover category-card ${selectedCategory === cat.id ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <div className="icon-container">{cat.icon}</div>
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* FILTER TABS & LISTINGS */}
      <main className="main-container" style={{ marginBottom: '90px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '28px',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '14px'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'all', label: 'All Listings' },
              { id: 'lost', label: 'Lost Items' },
              { id: 'found', label: 'Found Items' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? '#eef1fb' : 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-muted)',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 500 }}>
            {items.length} {items.length === 1 ? 'listing' : 'listings'}
          </div>
        </div>

        {/* LOADING INDICATOR */}
        {loading ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '260px',
            gap: '12px'
          }}>
            <div className="spinner" style={{ width: '36px', height: '36px' }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading items...</span>
          </div>
        ) : items.length === 0 ? (
          <div className="panel" style={{
            padding: '56px 20px',
            textAlign: 'center',
            borderStyle: 'dashed',
          }}>
            <h3 style={{ marginBottom: '8px', fontWeight: 700 }}>No items found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '400px', margin: '0 auto' }}>
              We couldn't find any listings matching your current category or search. Try adjusting your filters.
            </p>
          </div>
        ) : (
          /* ITEMS GRID */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '24px',
          }}>
            {items.map((item) => (
              <div
                key={item._id}
                className="panel panel-hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                {/* Image */}
                <div style={{
                  height: '170px',
                  width: '100%',
                  position: 'relative',
                  background: '#eeeef1'
                }}>
                  <span className={`badge ${item.status === 'resolved' ? 'resolved' : item.type}`}>
                    {item.status === 'resolved' ? 'resolved' : item.type}
                  </span>

                  <img
                    src={item.imageUrl ? `${API_HOST}${item.imageUrl}` : getCategoryPlaceholder(item.category)}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: item.status === 'resolved' ? 0.5 : 1,
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getCategoryPlaceholder(item.category);
                    }}
                  />
                </div>

                {/* Card Details */}
                <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '6px',
                    display: 'block'
                  }}>
                    {item.category}
                  </span>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginBottom: '8px',
                    fontWeight: 700,
                    textDecoration: item.status === 'resolved' ? 'line-through' : 'none',
                    color: item.status === 'resolved' ? 'var(--text-dim)' : 'var(--text-main)'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.87rem',
                    lineHeight: '1.5',
                    marginBottom: '18px',
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {item.description}
                  </p>

                  <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    marginBottom: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <MapPinIcon />
                      <span style={{ maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarIcon />
                      <span>{new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <button
                    className="btn"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                    onClick={() => setSelectedItem(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* DETAIL MODAL */}
      {selectedItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(20, 20, 25, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '20px'
        }}>
          <div
            className="panel"
            style={{
              width: '100%',
              maxWidth: '820px',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: '1px solid var(--border)'
            }}>
              <div>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--text-dim)'
                }}>
                  Item Details
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{selectedItem.title}</h2>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="btn"
                style={{
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  padding: 0,
                  justifyContent: 'center'
                }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
                marginBottom: '28px'
              }}>
                {/* Photo */}
                <div style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '230px',
                  background: '#eeeef1',
                  border: '1px solid var(--border)'
                }}>
                  <img
                    src={selectedItem.imageUrl ? `${API_HOST}${selectedItem.imageUrl}` : getCategoryPlaceholder(selectedItem.category)}
                    alt={selectedItem.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getCategoryPlaceholder(selectedItem.category);
                    }}
                  />
                  <span className={`badge ${selectedItem.status === 'resolved' ? 'resolved' : selectedItem.type}`}>
                    {selectedItem.status === 'resolved' ? 'resolved' : selectedItem.type}
                  </span>
                </div>

                {/* Metadata */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '4px' }}>Description</h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                      {selectedItem.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                        <MapPinIcon />
                        <span><strong>Location:</strong> {selectedItem.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                        <CalendarIcon />
                        <span><strong>Date:</strong> {new Date(selectedItem.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                        <EnvelopeIcon />
                        <span><strong>Contact:</strong> <a href={`mailto:${selectedItem.contactEmail}`} style={{ color: 'var(--accent)' }}>{selectedItem.contactEmail}</a></span>
                      </div>
                      {selectedItem.contactPhone && (
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                          <PhoneIcon />
                          <span><strong>Phone:</strong> <a href={`tel:${selectedItem.contactPhone}`} style={{ color: 'var(--accent)' }}>{selectedItem.contactPhone}</a></span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
                    {currentUser && selectedItem.reporterId !== currentUser.id && (
                      <button
                        className="btn"
                        style={{ justifyContent: 'center' }}
                        onClick={() => openChatForItem(selectedItem)}
                      >
                        <SendIcon /> Message {selectedItem.type === 'lost' ? 'Reporter' : 'Finder'}
                      </button>
                    )}
                    {selectedItem.status === 'active' && (
                      <button
                        className="btn btn-primary"
                        style={{ justifyContent: 'center' }}
                        onClick={() => handleResolveItem(selectedItem._id)}
                      >
                        <CheckIcon /> Mark as Resolved (Found/Returned)
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* SIMILAR ITEMS SECTION */}
              <div style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '22px'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px' }}>Similar Items</h3>

                {loadingMatches ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px 0' }}>
                    <div className="spinner" style={{ width: '18px', height: '18px' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Looking for similar items...</span>
                  </div>
                ) : matches.length === 0 ? (
                  <div style={{
                    padding: '22px',
                    background: '#f7f7f8',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-dim)',
                    fontSize: '0.85rem',
                    textAlign: 'center'
                  }}>
                    No similar items found yet.
                  </div>
                ) : (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {matches.map(match => (
                      <div
                        key={match._id}
                        className="panel"
                        style={{
                          padding: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            flexShrink: 0,
                            background: '#eeeef1'
                          }}>
                            <img
                              src={match.imageUrl ? `${API_HOST}${match.imageUrl}` : getCategoryPlaceholder(match.category)}
                              alt={match.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                          <div>
                            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '2px' }}>{match.title}</h4>
                            <p style={{
                              fontSize: '0.78rem',
                              color: 'var(--text-muted)',
                              display: '-webkit-box',
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {match.description}
                            </p>
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block', marginTop: '2px' }}>
                              {match.location}
                            </span>
                          </div>
                        </div>

                        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: 'var(--accent)',
                            background: '#eef1fb',
                            padding: '3px 8px',
                            borderRadius: '12px'
                          }}>
                            Match: {match.matchScore}
                          </span>
                          <button
                            className="btn"
                            style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                            onClick={() => setSelectedItem(match)}
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REPORT MODAL */}
      {isReportOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(20, 20, 25, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '20px'
        }}>
          <div
            className="panel"
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: '1px solid var(--border)'
            }}>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Report an Item</h2>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Fill in the details below</p>
              </div>
              <button
                onClick={() => setIsReportOpen(false)}
                className="btn"
                style={{
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  padding: 0,
                  justifyContent: 'center'
                }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleFormSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Type Switcher */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setFormType('lost')}
                  style={{
                    flex: 1,
                    padding: '11px 0',
                    border: '1px solid ' + (formType === 'lost' ? 'var(--red)' : 'var(--border)'),
                    background: formType === 'lost' ? 'var(--red-bg)' : 'transparent',
                    color: formType === 'lost' ? 'var(--red)' : 'var(--text-muted)',
                    fontWeight: 700,
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Lost
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('found')}
                  style={{
                    flex: 1,
                    padding: '11px 0',
                    border: '1px solid ' + (formType === 'found' ? 'var(--green)' : 'var(--border)'),
                    background: formType === 'found' ? 'var(--green-bg)' : 'transparent',
                    color: formType === 'found' ? 'var(--green)' : 'var(--text-muted)',
                    fontWeight: 700,
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Found
                </button>
              </div>

              {/* Title */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Item Title *</label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Lost iPhone 15 Pro, Found silver house keys"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              {/* Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Description *</label>
                <textarea
                  name="description"
                  placeholder="Describe unique details, keychains, scratches, color, model details..."
                  required
                  rows="3"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Category */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Keys">Keys</option>
                    <option value="Documents">Documents</option>
                    <option value="Pets">Pets</option>
                    <option value="Bags">Bags & Wallets</option>
                    <option value="Clothing">Clothing & Accessories</option>
                    <option value="Jewelry">Jewelry & Watches</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Date */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="input"
                  />
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Approximate Location *</label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Near 5th Ave Starbucks, Central Library Floor 2"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              {/* Contact Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Contact Email Address *</label>
                <input
                  type="email"
                  name="contactEmail"
                  placeholder="name@example.com"
                  required
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              {/* Contact Phone */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Contact Number *</label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="e.g. +1 555 123 4567"
                  required
                  pattern="^[+0-9()\-\s]{7,20}$"
                  title="Enter a valid phone number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              {/* File Attachment */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Upload Photo (optional)</label>
                <div style={{
                  position: 'relative',
                  border: '1px dashed var(--border)',
                  borderRadius: '8px',
                  padding: '18px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: '#fafafb',
                }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>
                    {selectedFile ? selectedFile.name : 'Select file or drag & drop (Max 5MB)'}
                  </span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div style={{
                marginTop: '6px',
                borderTop: '1px solid var(--border)',
                paddingTop: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '12px'
              }}>
                <button
                  type="button"
                  onClick={() => setIsReportOpen(false)}
                  className="btn"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploadProgress}
                  className="btn btn-primary"
                >
                  {uploadProgress ? 'Submitting...' : `Submit ${formType} Report`}
                </button>
              </div>

              {formSuccessMessage && (
                <div className="panel" style={{
                  padding: '12px',
                  background: 'var(--green-bg)',
                  borderColor: 'var(--green)',
                  color: 'var(--green)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}>
                  {formSuccessMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
      {/* CHAT / INBOX PANEL */}
      {isInboxOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(20, 20, 25, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '20px'
        }}>
          <div className="panel" style={{
            width: '100%',
            maxWidth: '760px',
            height: '78vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: '1px solid var(--border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {activeConversation && (
                  <button
                    onClick={backToInbox}
                    className="btn"
                    style={{ padding: '6px 10px', fontSize: '0.8rem' }}
                  >
                    ← Back
                  </button>
                )}
                <h2 style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                  {activeConversation ? activeConversation.otherUserName : 'Messages'}
                </h2>
              </div>
              <button
                onClick={closeChatPanel}
                className="btn"
                style={{ borderRadius: '50%', width: '34px', height: '34px', padding: 0, justifyContent: 'center' }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Body */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              {!activeConversation ? (
                /* Conversation List */
                <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                  {loadingConversations ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px' }}>
                      <div className="spinner" style={{ width: '18px', height: '18px' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Loading conversations...</span>
                    </div>
                  ) : conversations.length === 0 ? (
                    <div style={{ padding: '30px 20px', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                      No conversations yet. Open an item's details and message its poster to start one.
                    </div>
                  ) : (
                    conversations.map(convo => (
                      <div
                        key={convo._id}
                        onClick={() => openConversation(convo)}
                        className="panel panel-hover"
                        style={{
                          padding: '14px',
                          marginBottom: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px'
                        }}
                      >
                        <div>
                          <h4 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '2px' }}>{convo.otherUserName}</h4>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', marginBottom: '2px' }}>
                            Re: {convo.itemTitle}
                          </span>
                          <p style={{
                            fontSize: '0.82rem',
                            color: 'var(--text-muted)',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {convo.lastMessage || 'No messages yet'}
                          </p>
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
                          {new Date(convo.lastMessageAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                /* Message Thread */
                <>
                  <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '18px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    background: '#fafafb'
                  }}>
                    {chatLoading ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="spinner" style={{ width: '18px', height: '18px' }} />
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Loading messages...</span>
                      </div>
                    ) : chatMessages.length === 0 ? (
                      <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '20px' }}>
                        No messages yet. Say hello!
                      </div>
                    ) : (
                      chatMessages.map(msg => {
                        const isMine = currentUser && msg.senderId === currentUser.id;
                        return (
                          <div
                            key={msg._id}
                            style={{
                              alignSelf: isMine ? 'flex-end' : 'flex-start',
                              maxWidth: '70%',
                              background: isMine ? 'var(--accent)' : 'var(--surface)',
                              color: isMine ? '#ffffff' : 'var(--text-main)',
                              border: isMine ? 'none' : '1px solid var(--border)',
                              borderRadius: '12px',
                              padding: '9px 13px',
                            }}
                          >
                            <p style={{ fontSize: '0.88rem', lineHeight: '1.4' }}>{msg.text}</p>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <form
                    onSubmit={handleSendMessage}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      padding: '14px 20px',
                      borderTop: '1px solid var(--border)'
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Type a message..."
                      value={chatText}
                      onChange={(e) => setChatText(e.target.value)}
                      className="input"
                      style={{ flex: 1 }}
                    />
                    <button
                      type="submit"
                      disabled={chatSending || !chatText.trim()}
                      className="btn btn-primary"
                      style={{ padding: '10px 16px' }}
                    >
                      <SendIcon />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
